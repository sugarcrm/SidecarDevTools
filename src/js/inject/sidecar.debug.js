/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */
(function() {
    var Sidecar = window.App;

    /**
     * Adds a method to the `View.Layout` class to get information on the current
     * layout, and its child components.
     * It returns a hierarchical object of the sidecar components on the current
     * page.
     *
     * @return {Object} def The object containing the components of the current
     *   page.
     */
    Sidecar.view.Layout.prototype.getComponentInfo = function() {
        var renderTime = App.debug.getComponentRenderTime(this.cid);
        renderTime = Math.round(renderTime*10)/10;
        var path = this.getJSPath();
        var def = {
            cid: this.cid,
            name: this.name,
            type: this.type,
            module: this.module,
            contextId: this.context.cid,
            context: JSON.stringify(this.context),
            compType: 'layout',
            performance: renderTime,
            components: _.map(this._components, function(comp) {
                return comp.getComponentInfo();
            }),
            path: path || ''
        };
        return def;
    }

    /**
     * Adds a method to the `View.View` class to get information on the current
     * view.
     *
     * @return {Object} def The object containing information on the current
     *   view.
     */
    Sidecar.view.View.prototype.getComponentInfo = function() {
        var renderTime = App.debug.getComponentRenderTime(this.cid);
        renderTime = Math.round(renderTime*10)/10;
        var path = this.getJSPath();
        var def = {
            cid: this.cid,
            contextId: this.context.cid,
            context: JSON.stringify(this.context),
            name: this.name,
            type: this.type,
            compType: 'view',
            performance: renderTime,
            module: this.module,
            path: path || '',
            fields: _.map(this.fields, function(comp) {
                return comp.getComponentInfo();
            })
        };
        return def;
    };

    /**
     * Adds a method to the `View.Field` class to get information on the current
     * field.
     *
     * @return {Object} def The object containing information on the current
     *   field.
     */
    Sidecar.view.Field.prototype.getComponentInfo = function() {
        var renderTime = App.debug.getComponentRenderTime(this.cid);
        renderTime = Math.round(renderTime*10)/10;
        var path = this.getJSPath();
        var def = {
            cid: this.cid,
            contextId: this.context.cid,
            context: JSON.stringify(this.context),
            name: !_.isEmpty(this.fields) ? this.type : this.name,
            type: this.type,
            compType: 'field',
            performance: renderTime,
            module: this.module,
            path: path || '',
            fields: _.map(this.fields, function(comp) {
                return comp.getComponentInfo();
            })
        };
        if (!_.isEmpty(this.fields)) {
            def.fieldset = true;
        }
        return def;
    };

    /**
     * Searches the metadata for a JS source file on the current component.
     *
     * @return {String} path    The JS source file path
     */
    Sidecar.view.Component.prototype.getJSPath = function() {
        var name = this.type || this.name,
            type = this.debugType,
            module_prop, // property for App.metadata.getModule() output
            module = this.module,
            path;

        if(type == 'field') {
            module_prop = 'fieldTemplates';
        } else {
            module_prop = type + 's';
        }
        type = type + 's';

        if (App.metadata.getModule(module) &&
            App.metadata.getModule(module)[module_prop] &&
            App.metadata.getModule(module)[module_prop][name] &&
            App.metadata.getModule(module)[module_prop][name].path
        ) {
            path = App.metadata.getModule(module)[module_prop][name].path;
        } else {
            path = App.metadata.getStrings(type)[name] ?
                App.metadata.getStrings(type)[name].path : '';
        }

        return path;
    };

    Sidecar.view.Layout.prototype.setRenderTime =
    Sidecar.view.View.prototype.setRenderTime =
    Sidecar.view.Field.prototype.setRenderTime = function(time, operation) {
        if (!time) {
            return;
        }
        switch (operation) {
            case 'add':
                this.performance += time;
                break;
            case 'subtract':
                this.performance -= time;
                break;
            default:
                this.performance = time;
        }
        var parent = this.parent || this.view || this.layout;
        if (parent) {
            parent.setRenderTime(time, operation);
        }
    };

    Sidecar.Debug = (function() {

        var _components = {};

        function Debug() {
            //Sidecar.app.on('app:sync', this._onSyncStart, this);
            //Sidecar.app.on('app:sync:complete', this._onSyncComplete, this);
            Sidecar.events.trigger = _.wrap(Sidecar.events.trigger, function(trigger) {
                var args = Array.prototype.slice.call(arguments, 1);
                Sidecar.debug.AppStream.add(
                    {
                        'event': args[0],
                        'operation': args[1] || '',
                        'type': 'app.event',
                        args: _.clone(args)
                    }
                );
                var result = trigger.apply(Sidecar.events, args);
                return result;
            });
            this._hookPrototype('Controller', 'loadView', this._onHookControllerLoadView, true);
            this._hookPrototype('view.Field', 'initialize', this._onHookFieldInitialize, true);
            this._hookPrototype('view.Field', 'render', this._onHookFieldRender, true, true);
            this._hookPrototype('view.View', 'initialize', this._onHookViewInitialize, true);
            this._hookPrototype('view.View', 'render', this._onHookViewRender, true);
            this._hookPrototype('view.Layout', 'initialize', this._onHookLayoutInitialize, true);
            this._hookPrototype('view.Layout', 'render', this._onHookLayoutRender, true);
            this._hookPrototype('view.Component', 'dispose', this._removeField);
            this._hookPrototype('view.Component', 'trigger', this._onHookComponentTrigger, true);
        };

        /**
         * Helper method to hook a method of a given sidecar component.
         */
        Debug.prototype._hookPrototype = function(objectName, method, action, performance) {
            var elems = objectName.split('.');
            var object = Sidecar;
            try {
                elems.every(function(elem) {
                    object = object[elem];
                    if (_.isUndefined(object)) {
                        throw "Wrong name."
                        return false;
                    }
                    return true;
                });
            } catch(err) {
                console.log('The component you\'re trying to hook doesn\'t exist.');
                return;
            }

            var original;
            original = object.prototype[method];
            return object.prototype[method] = function() {
                var ret;
                var start = performance && window.performance.now();
                var args = Array.prototype.slice.call(arguments, 0);
                ret = original.apply(this, args);
                if (performance) {
                    var end = window.performance.now();
                    args.push(Math.round((end-start) * 10 ) / 10);
                    action.apply(this, args);
                } else {
                    action.apply(this, args);
                }
                return ret;
            };
        };

        Debug.prototype._onHookLayoutInitialize = function(options, performance) {
            this.debugType = 'layout';
            _components[this.cid] = this;
            Sidecar.debug.AppStream.add({
                'type': 'layout.initialize',
                instance: this,
                performance: Array.prototype.slice.call(arguments, -1).pop(),
                'layout': {
                    name: this.name,
                    type: this.type
                },
                'args': options
            });
        };

        Debug.prototype._onHookViewInitialize = function(options, performance) {
            this.debugType = 'view';
            _components[this.cid] = this;
            Sidecar.debug.AppStream.add({
                'type': 'view.initialize',
                instance: this,
                performance: Array.prototype.slice.call(arguments, -1).pop(),
                'view': {
                    name: this.name
                },
                'args': options
            });
        };

        Debug.prototype._onHookFieldInitialize = function(options, performance) {
            this.debugType = 'field';
            _components[this.cid] = this;
            Sidecar.debug.AppStream.add({
                'type': 'field.initialize',
                instance: this,
                performance: Array.prototype.slice.call(arguments, -1).pop(),
                'field': {
                    name: this.name,
                    type: this.type
                },
                'args': options
            });
        };

        Debug.prototype._onHookLayoutRender = function() {
            this.$el.attr('data-debug-cid', this.cid);

            var performance = Array.prototype.slice.call(arguments, -1).pop();
            var lastRenderTime = _components[this.cid].performance;
            this.layout && this.layout.setRenderTime(lastRenderTime, 'subtract');
            _components[this.cid].performance = performance;
            this.layout && this.layout.setRenderTime(performance, 'add');

            Sidecar.debug.AppStream.add({
                'type': 'layout.render',
                instance: this,
                performance: performance,
                'layout': {
                    name: this.name,
                    type: this.type,
                    tplName: this.tplName
                }
            });
        };

        Debug.prototype._onHookViewRender = function() {
            this.$el.attr('data-debug-cid', this.cid);

            var performance = Array.prototype.slice.call(arguments, -1).pop();
            var lastRenderTime = _components[this.cid].performance;
            this.layout.setRenderTime(lastRenderTime, 'subtract');
            _components[this.cid].performance = performance;
            this.layout.setRenderTime(performance, 'add');
            Sidecar.debug.AppStream.add({
                'type': 'view.render',
                instance: this,
                performance: performance,
                'view': {
                    name: this.name,
                    type: this.type,
                    tplName: this.tplName,
                    action: this.action
                }
            });

            if(window.sessionStorage['_sidecar_debug_tooltips'] === 'enabled') {
                // add view info widget
                var tooltip_html = '<h5>' + this.cid + '</h5>';

                var attributes = _.pick(this, 'name', 'action', 'module');

                attributes.path = this.getJSPath();

                tooltip_html += '<ul class="unstyled">';
                _.each(attributes, function (value, key) {
                    tooltip_html += '<li><strong>' + key + ':</strong> ' + value + '</li>';
                });
                tooltip_html += '</ul>';

                var $parent = $('div[data-debug-cid=' + this.layout.cid + ']');

                createTooltip(this.$el, $parent, tooltip_html);
            }
        };

        Debug.prototype._onHookFieldRender = function() {
            var parent = this.parent ? 'parent' : 'view';
            var performance = Array.prototype.slice.call(arguments, -1).pop();

            this.$el.attr('data-debug-cid', this.cid);

            var lastRenderTime = _components[this.cid].performance;
            this[parent].setRenderTime(lastRenderTime, 'subtract');
            _components[this.cid].performance = performance;
            this[parent].setRenderTime(performance, 'add');

            _components[this.cid].performance = performance;

            Sidecar.debug.AppStream.add({
                'type': 'field.render',
                instance: this,
                performance: performance,
                'field': {
                    name: this.name,
                    type: this.type,
                    tplName: this.tplName,
                    action: this.action
                }
            });
            
            var self = this;
            if(window.sessionStorage['_sidecar_debug_tooltips'] === 'enabled') {
                var _createFieldTooltip = function() {
                    // add field info widget
                    var tooltip_html = '<h5>' + self.cid + '</h5>';

                    tooltip_html += '<ul class="unstyled">';

                    var attributes = _.extend({},
                        _.pick(self.def, 'name', 'vname', 'type'),
                        {
                            module: self.module,
                            model: ( (_.isUndefined(self.model.id)) ? 'none' : self.model.module + '/' + self.model.id)
                        }
                    );

                    attributes.path = self.getJSPath();

                    // check for all sugar action types (*action)
                    if(/(action|button)/.test(self.type)) {
                        attributes = _.extend(attributes, _.pick(self.def, 'action', 'event', 'tooltip', 'acl_action'))
                    }

                    // get value if it exists on the model
                    if(!_.isUndefined(self.model.attributes[self.name])) {
                        var value = self.model.attributes[self.name];

                        attributes = _.extend(attributes, {value: value});
                    }

                    // filter relevant attributes from different field types
                    switch (self.type) {
                        default:
                            break;
                        case 'teamset':
                            var team_ids = [];
                            var primary_team = false;
                            if(value instanceof Array) {
                                _.each(value, function(team) {
                                    team_ids.push(team.id);
                                    if(team.primary) {
                                        primary_team = team.id;
                                    }
                                });
                            }
                            attributes.value = '[' + team_ids.join(', ') + ']';
                            if(primary_team) {
                                attributes = _.extend(attributes, {primary_team: primary_team});
                            }
                            break;
                        case 'relate': // relate and relationship fields
                            attributes = _.extend(attributes, _.pick(self.def, 'link', 'id_name', 'module'),
                                {
                                    'link_module': self.def.module,
                                    'link_record': self.model.get(self.def.id_name)
                                }
                            );
                            break;
                        case 'parent': // flex relate
                            var type_name = self.def.type_name,
                                id_name = self.def.id_name;
                            attributes = _.extend(attributes, _.pick(self.def, 'options'));
                            attributes[type_name] = self.model.get(self.def.type_name);
                            attributes[id_name] = self.model.get(self.def.id_name);
                            break;
                        case 'currency':
                            // show currencies in a
                            var currencyId = self.model.get('currency_id') || -99;
                            attributes = _.extend(attributes, {
                                currency: App.metadata.getCurrency(currencyId).iso4217 + ' (' + currencyId + ')',
                                base_rate: self.model.get('base_rate') || 1.0
                            });
                            break;
                        case 'enum':
                            attributes = _.extend(attributes, _.pick(self.def, 'options', 'isMultiSelect'));
                            break;
                    }
                    _.each(attributes, function (value, key) {
                        tooltip_html += '<li><strong>' + key + ':</strong> ' + value + '</li>';
                    });

                    tooltip_html += '</ul>';

                    var $el = self.$el;

                    // workaround for mouse opacity on inline edit wrapper
                    // uses the record cell instead of the actual field
                    if(self.view && self.view.name == 'record') {
                        //$el = self.$el.closest('div[data-name="' + self.name + '"], span[data-name="' + self.name + '"]');
                        $el = self.$el.closest('[data-name="' + self.name + '"]');
                    }

                    var $parent = $('div[data-debug-cid=' + self.view.cid + ']');

                    createTooltip($el, $parent, tooltip_html);
                };
                _createFieldTooltip.apply();
                self.model.on('change:' + this.name, _createFieldTooltip);
            }
        };

        Debug.prototype._onHookComponentTrigger = function() {
            var args = Array.prototype.slice.call(arguments, 0);
            var activity = {
                instance: this,
                'type': this.debugType + '.trigger',
                performance: args.pop(),
                args: args,
                event: args[0]
            };
            activity[this.debugType] = {
                name: this.name,
                type: this.type
            };
            Sidecar.debug.AppStream.add(activity);
        };

        Debug.prototype._onHookControllerLoadView = function(params, performance) {
            Sidecar.debug.AppStream.add({
                instance: this,
                'layout': params.layout,
                'module': params.module,
                'type': 'controller',
                performance: Array.prototype.slice.call(arguments, -1).pop(),
                'args': params
            });
        };

        Debug.prototype._removeField = function() {
            delete _components[this.cid];
        };

        Debug.prototype.getComponent = function(cid) {
            return _components[cid];
        };

        /**
         * Gets the renderTime of a component given its cid.
         *
         * @param {string} cid The component's cid.
         * @return {number} The time that the component took to render.
         */
        Debug.prototype.getComponentRenderTime = function(cid) {
            return _components[cid].performance;
        };

        /**
         * Creates a custom Bootstrap tooltip for displaying component info.
         * @param $el The tooltip target as a jQuery object
         * @param $parent The parent of $el as a jQuery object
         * @param html
         */
        function createTooltip($el, $parent, html) {
            $el.tooltip('destroy');
            $el.tooltip({
                html: true,
                title: html,
                template: '<div class="tooltip sdt-tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                container: '#sidecar',
                sdt: true,
                placement: function(tip, element) {
                    var position = $(element).position(),
                        offset = $(element).offset(),
                        placement = 'top';
                    
                    if(offset.top > (window.innerHeight / 3)) {
                        if(offset.left > (window.innerWidth / 2) && offset.top < (window.innerHeight * 2/3)) {
                            placement = 'left';
                        }
                    } else {
                        placement = 'bottom';
                    }

                    return placement;
                }
            }).on("show.bs.tooltip", function(e) {
                var tooltip = $(this).data('bs.tooltip');
                if(_.isUndefined(tooltip.options.sdt)) {
                    return;
                }
                $('.tooltip').not(tooltip.$tip).hide();
            });
        }

        function formatDate(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            seconds = seconds < 10 ? '0'+seconds : seconds;
            var strTime = hours + ':' + minutes + ':' + seconds;
            return strTime;
            return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
        }

        var Activity = Backbone.Model.extend({
            initialize: function(attributes) {
                var now = new Date();
                this.set('_createdAt', now.getTime(), {silent: true});

                // map id to event type and component's cid for easier retrieval
                if(!_.isUndefined(attributes.instance)) {
                    this.set('id', attributes.type + '.' + attributes.instance.cid);
                } else {
                    this.set('id', attributes.type + '.' + this.cid);
                }
                this.createdAt = formatDate(now);
            },

            toJSON: function() {
                var orig = Backbone.Model.prototype.toJSON.call(this);
                orig.createdAt = this.createdAt;
                orig.args = !!orig.args;
                orig.instance = !!orig.instance;
                return orig;
            }
        });

        var ActivityStream = Backbone.Collection.extend({
            model: Activity,

            getAll: function() {
                return this.models;
            }
        });

        Debug.prototype.AppStream = new ActivityStream();

        /**
         * Override error.handleRenderError method to provide more information on render error.
         */
        var _handleRenderError = Sidecar.error.handleRenderError;

        Debug.prototype._handleRenderError = function(component, method, additionalInfo) {
            console.log('=== handleRenderError Information ===');
            console.log('Name: ' + additionalInfo.name);
            console.log('Type: ' + additionalInfo.type);
            console.log('== ComponentInfo ==', component);
            console.log('== AdditionalInfo ==', additionalInfo);
            return _handleRenderError.apply(_handleRenderError, arguments);
        };

        return Debug;

    })();

    Sidecar.debug = new Sidecar.Debug();
    Sidecar.error.handleRenderError = Sidecar.error.handleRenderError ? Sidecar.debug._handleRenderError : undefined;

}).call(this);
