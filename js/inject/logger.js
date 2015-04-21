// Load this file immediately after backbone.debug.js

(function() {

    var instanceType = function(object) {
        if (object instanceof Backbone.Model) return 'Model';
        if (object instanceof Backbone.Collection) return 'Collection';
        if (object instanceof Backbone.View) return 'View';
        if (object instanceof Backbone.Router) return 'Router';
        return '';
    };

    var sidecarInstanceType = function(object) {
        if (object instanceof SUGAR.App.view.Field) return 'View.Field';
        if (object instanceof SUGAR.App.view.View) return 'View.View';
        if (object instanceof SUGAR.App.view.Layout) return 'View.Layout';
        if (object instanceof SUGAR.App.Context) return 'Core.Context';
        if (object instanceof SUGAR.App.Bean) return 'Data.Bean';
        if (object instanceof SUGAR.App.BeanCollection) return 'Data.BeanCollection';
        if (object instanceof SUGAR.App.MixedBeanCollection) return 'Data.MixedBeanCollection';
        if (object === SUGAR.App.data) return 'Data.Manager';
        if (object instanceof SUGAR.App.utils.FilterOptions) return 'Utils.FilterOptions';
        if (object === SUGAR.App.user) return 'Core.User';
    };

    var prettyInstanceName = function(object) {
        var name;
        name = object.constructor.name || instanceType(object);
        var sidecarType = sidecarInstanceType(object);
        if (sidecarType) {
            var module = object.module || '';
            var type = sidecarType;
            name = object.name || object.id;
            if (type === 'Data.Manager') return 'Data.Manager';
            if (type === 'Core.User') {
                name = object.full_name;
            }
            if (type === 'View.Field') {
                name = object.type + ' (' + name + ')';
            }

            if (_.isUndefined(name)) {
                name = '[' + type + ']';
            } else {
                name = '[' + type + '] ' + name;
            }

            if (module) {
                name = name.concat(' (module: ' + module + ')');
            }
        }
        if (object.cid) {
            // Full format is:
            // [Layout] records (module: Accounts) -cid: 123-:
            // [View] record (module: Accounts) -cid: 123-:
            // [Field] date_entered(date) (module: ) -cid: 123-:
            name = name.concat(' - cid:' + object.cid + '-');
        }
        return name;
    };

    var prettyElementName = function(elem) {
        if (!elem || !elem.tagName) {
            console.warn('[BDT Warning] Incorrect view.el value');
            return elem + '';
        }
        return elem.tagName.toLowerCase() + ((elem.id && ('#' + elem.id)) ||
            (elem.className && ([''].concat(elem.className.match(/\S+/g) || []).join('.'))));
    };

    var BDTLogger = {

        data: {
            'event': [],
            'view': [],
            'instance': [],
            'sync': []
        },

        log: function(type, object, details) {
            this.data[type].push({
                t: Date.now(),
                c1: (type === 'event') || (type === 'sync') ? prettyInstanceName(object) : object,
                c2: type === 'view' ? prettyElementName(details) : details
            });
        },

        getData: function(type, fromIndex, limit) {
            if (!fromIndex) fromIndex = 0;
            if (!limit) limit = 50;
            var untilIndex = fromIndex + limit;
            return this.data[type].slice(fromIndex, untilIndex);
        },

        clearData: function(type) {
            if (!type) {
                for (var key in this.data) this.clearData(key);
                return;
            }
            this.data[type] = [];
        }

    };

    window.Backbone.debug.logger = BDTLogger;
})();
