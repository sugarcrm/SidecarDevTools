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

        // functions to be executed in the context of inspected page

        getBackboneViews: function() {
            var tree = {__proto__: null};

            // get jQuery/Zepto
            var $ = window.Backbone && window.Backbone.$ || window.jQuery || window.Zepto;
            if (!($ && $0)) return tree;

            // Backbone jQuery extension is required
            if (typeof $.fn.backbone != 'function') return tree;

            // display elemens as eg. div#todoapp
            function pretty(elem) {
                return elem.tagName.toLowerCase() + (elem.id && ("#" + elem.id));
            }

            // we need to prefix element names if we want to preserve the order
            var index = 0;

            // start with currently selected DOM Element
            var elem = $($0);
            tree[index + ' ' + pretty(elem[0])] = elem.backbone();

            // go up the Backbone Views tree
            while (true) {
                var parentView = elem.backbone('parent')
                if (!parentView) break;
                elem = parentView.$el;
                tree[++index + ' ' + pretty(elem[0])] = parentView;
            }

            return tree;
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
            window.$view = sidecarComponent;
            console.log('***** Current Sidecar Component *****');
            console.log('* cid: ' + sidecarComponent.cid);
            console.log('* component type: ' + sidecarComponent.debugType);
            console.log('* Name: ' + sidecarComponent.name);
            if (sidecarComponent.type) {
                console.log('* Type: ' + sidecarComponent.type);
            }
            console.log('$view = ', sidecarComponent);
            console.log('**************************************');
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
            attributes = _.isEmpty(attributes) ? [] : JSON.parse(attributes);
            if (attributes.length > 0) {
                numberOfRecords = attributes.length;
            }
            isAttributesArray = _.isArray(attributes);

            options = _.isEmpty(options) ? {} : JSON.parse(options);
            isOptionsArray = _.isArray(options);

            for (var i = 0; i < numberOfRecords; i++) {
                if (isAttributesArray) {
                    attrs = _.isUndefined(attributes[i]) ? {} : attributes[i];
                    if (isOptionsArray) {
                        opts = _.isUndefined(options[i]) ? {} : options[i];
                    }
                } else {
                    attrs = attributes;
                    opts = options;
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
            attributes = _.isEmpty(attributes) ? [] : JSON.parse(attributes);
            isAttributesArray = _.isArray(attributes);

            for (var i = 0; i < numberOfRecords; i++) {

                if (isAttributesArray) {
                    attrs = _.isUndefined(attributes[i]) ? {} : attributes[i];
                    bean = App.data.createRelatedBean(model, null, link, attributes[i]);
                } else {
                    attrs = attributes;
                }
                bean = App.data.createRelatedBean(model, null, link, attrs);
                bean.save({}, options);
                collection.add(bean);
            }
            context.trigger('panel-top:refresh', link);
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

        renderComponent: function(cid) {
            var comp = App.debug.getComponent(cid);
            comp.render();

            return;
        },

        logComponent: function(cid) {
            console.log(App.debug.getComponent(cid));
        },

        getLayoutStructure: function() {
            return App.controller.layout.getComponentInfo();
        },

        isBackboneDebugReachable: function() {
            return window.Backbone && window.Backbone.debug && true;
        },

        isLoggerReachable: function() {
            return typeof window.Backbone.debug.logger.getData === 'function';
        },

        getData: function(type, fromIndex, limit) {
            return window.Backbone.debug.logger.getData(type, fromIndex, limit);
        },

        clearData: function(type) {
            window.Backbone.debug.logger.clearData(type);
        },

        enableInjection: function() {
            window.sessionStorage['_backbone_debug_injection'] = 'enabled';
        },

        disableInjection: function() {
            window.sessionStorage.removeItem('_backbone_debug_injection');
        },

        isInjectionEnabled: function() {
            return window.sessionStorage['_backbone_debug_injection'] === 'enabled';
        },

        updateTimeout: function(ms) {
            window.sessionStorage['_backbone_debug_injection_timeout'] = String(ms);
        },

        getTimeout: function() {
            return window.sessionStorage['_backbone_debug_injection_timeout'];
        },

        console: function(data) {
            console.log(data);
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
