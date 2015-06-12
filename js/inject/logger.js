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
        if (_.isFunction(SUGAR.App.utils.FilterOptions) && object instanceof SUGAR.App.utils.FilterOptions) return 'Utils.FilterOptions';
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
                c1: prettyInstanceName(object),
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

    var SDTLog = Backbone.Model.extend({
        initialize: function(attributes) {
            var now = new Date();
            this.set('_createdAt', now.getTime(), {silent: true});
            this.createdAt = formatDate(now);
        },

        trigger: $.noop(),

        toJSON: function() {
            var orig = Backbone.Model.prototype.toJSON.call(this);
            orig.createdAt = this.createdAt;
            return orig;
        }
    });

    var SDTLogger = Backbone.Collection.extend({
        model: SDTLog,

        trigger: $.noop(),

        getByType: function(type) {
            var models = this.where({type: type});
            return _.map(models, function(model){ return model.toJSON(); });
        },

        getAll: function() {
            return this.models;
        },

        log: function(type, object, details) {
            var attrs = {};
            attrs.type = type;
            if (object) {
                attrs.c1 = prettyInstanceName(object);
                attrs.c2 = type === 'view' ? prettyElementName(details) : details;
            }
            this.add();
        }
    });

    //window.Backbone.debug.logger = new SDTLogger();
    //
    //BDTLogger.log = _.wrap(BDTLogger.log, function(log, type, object, details) {
    //    log(type,object,details);
    //    var attrs = _.last(this.data[type]);
    //    window.SUGAR.App.debug.logger.log(attrs);
    //
    //});

})();
