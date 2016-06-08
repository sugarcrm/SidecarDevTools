/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */
(function() {

    var BDT = window.BDT;

    BDT.page = {

        // helpers for evaluating JS code in the context of inspected page

        eval: function(scriptName, args, callback) {
            args = args || [];
            var paramsString = args.map(JSON.stringify).join(",")

            chrome.devtools.inspectedWindow.eval(
                "(" + BDT.page[scriptName].toString() + ")(" + paramsString + ")",
                callback
            );
        },

        set$view: function() {
            // get jQuery/Zepto
            var $ = window.Backbone && window.Backbone.$ || window.jQuery || window.Zepto;
            if (!($ && $0)) return;

            // Backbone jQuery extension is required
            if (typeof $ != 'function') return;

            var sidecarDomElement = $($0).closest('[data-debug-cid]');
            var cid = sidecarDomElement.data('debug-cid');
            var sidecarComponent = App.debug.getComponent(cid);
            if (sidecarComponent) {
                window.$view = sidecarComponent;
                console.log('***** Current Sidecar Component *****');
                console.log('* cid: ' + sidecarComponent.cid);
                console.log('* component type: ' + sidecarComponent.debugType);
                console.log('* Name: ' + sidecarComponent.name);
                if (sidecarComponent.type) {
                    console.log('* Type: ' + sidecarComponent.type);
                }
                console.log('$view = ', sidecarComponent);
                console.log('*************************************');
            }
        },

        measureRenderTime: function(module, fieldType, iterations, template, modelAttr, viewDef) {
            var times = [], model, view, def, f, start, end, sum;

            module = module || App.controller.context.get('module');
            model = App.data.createBean(module, modelAttr);
            view = App.view.createView({model: model, name: 'list', module: module});
            def = _.extend({type: fieldType, viewName: template}, viewDef);
            for (var runs = 0; runs < iterations; runs++) {
                start = window.performance.now();
                f = App.view.createField({def: def, model: model, view: view});
                f.render();
                end = window.performance.now();
                times.push(end - start);
            }
            sum = times.reduce(function(a, b) {
                return a + b;
            });
            return sum;
        },

        generateRecords: function(module, attributes, numberOfRecords, options, addToCollection) {
            var bean, isAttributesArray, isOptionsArray, attrs, opts;
            var collection = App.controller.context.get('collection');
            var splitter = "*";

            attributes = _.isEmpty(attributes) ? [] : JSON.parse(attributes);

            if (attributes.length > 0) {
                numberOfRecords = attributes.length;
            }
            isAttributesArray = _.isArray(attributes);

            options = _.isEmpty(options) ? {} : JSON.parse(options);
            isOptionsArray = _.isArray(options);

            // Initializing the arguments to pass to the createBean method.
            attrs = _.clone(attributes);
            opts = _.clone(options);

            for (var i = 0; i < numberOfRecords; i++) {
                if (isAttributesArray) {
                    attrs = _.isUndefined(attributes[i]) ? {} : attributes[i];
                    if (isOptionsArray) {
                        opts = _.isUndefined(options[i]) ? {} : options[i];
                    }
                } else {
                    // Incrementing attributes for those .
                    _.each(attributes, function(val, key) {
                        if (val.slice(-1) === splitter) {
                            attrs[key] = val.slice(0, -1) + i;
                        }
                    });
                }

                bean = App.data.createBean(module, attrs, opts);
                bean.save();
                console.log(bean);
                if (addToCollection) {
                    App.controller.context.get('collection').add(bean);
                }
            }
        },

        generateRelatedRecords: function(module, subpanel, attributes, numberOfRecords) {
            var bean, isAttributesArray, attrs;
            var context = App.controller.context;
            var model = context.get('model');
            var collection = model._relatedCollections[subpanel];
            var link = context.get('model')._relatedCollections[subpanel].link.name;
            var options = {relate: true};
            var splitter = "*";

            attributes = _.isEmpty(attributes) ? [] : JSON.parse(attributes);
            isAttributesArray = _.isArray(attributes);

            // Initializing the arguments to pass to the createBean method.
            attrs = _.clone(attributes);

            for (var i = 0; i < numberOfRecords; i++) {
                if (isAttributesArray) {
                    attrs = _.isUndefined(attributes[i]) ? {} : attributes[i];
                } else {
                    // Incrementing attributes for those .
                    _.each(attributes, function(val, key) {
                        if (val.slice(-1) === splitter) {
                            attrs[key] = val.slice(0, -1) + i;
                        }
                    });
                }

                bean = App.data.createRelatedBean(model, null, link, attrs);
                bean.save({}, options);
                collection.add(bean);
                console.log(bean);
                context.trigger('panel-top:refresh', link);
            }
        },

        getComponentMethods: function(type, compClassName) {
            var methods = [];
            _.each(App.view[type][compClassName].prototype, function(prop, key) {
                if (_.isFunction(prop)) {
                    methods.push(key);
                }
            });
            return methods;
        },

        getSubpanels: function(module) {
            var subpanels = App.utils.getSubpanelList(module);

            return subpanels;
        },

        getCurrentModule: function() {
            var currentModule = App.controller.context.get('module');

            return currentModule;
        },

        getModuleFields: function(module) {
            return App.metadata.getModule(module).fields;
        },

        renderComponent: function(cid) {
            var comp = App.debug.getComponent(cid);
            comp.render();

            return;
        },

        logComponent: function(cid) {
            var componentInfos = App.debug.getComponent(cid).getComponentInfo();
            console.log('Name: ' + componentInfos.name);
            console.log('Comp type: ' + componentInfos.compType);
            console.log('Module: ' + componentInfos.module);
            console.log('File path: ' + componentInfos.path);
            console.log('Component object:', App.debug.getComponent(cid));
        },

        getLayoutStructure: function() {
            return App.controller.layout.getComponentInfo();
        },

        enableTooltips: function() {
            window.sessionStorage['_sidecar_debug_tooltips'] = 'enabled';
        },

        disableTooltips: function() {
            window.sessionStorage.removeItem('_sidecar_debug_tooltips');
        },

        areTooltipsEnabled: function() {
            return window.sessionStorage['_sidecar_debug_tooltips'] === 'enabled';
        },

        updateTimeout: function(ms) {
            window.sessionStorage['_sidecar_debug_injection_timeout'] = String(ms);
        },

        console: function(level, data) {
            console[level](data);
        },

        consoleActivityArgs: function(id) {
            var act = window.SUGAR.App.debug.AppStream.get(id);
            console.log(act.get('args'));
        },

        consoleActivityComponent: function(id) {
            var act = window.SUGAR.App.debug.AppStream.get(id);
            console.log(act.get('instance'));
        }
    };
})();
