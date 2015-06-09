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
        var def = {
            cid: this.cid,
            name: this.name,
            type: this.type,
            contextId: this.context.cid,
            context: JSON.stringify(this.context),
            compType: 'layout',
            components: _.map(this._components, function(comp) {
                return comp.getComponentInfo();
            })
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
        var def = {
            cid: this.cid,
            contextId: this.context.cid,
            context: JSON.stringify(this.context),
            name: this.name,
            type: this.type,
            compType: 'view'
        };
        return def;
    }

    Sidecar.Debug = (function() {

        var _components = {};

        function Debug() {
            this._hookPrototype('view.Field', 'initialize', this._onHookFieldInitialize);
            this._hookPrototype('view.View', 'initialize', this._onHookViewInitialize);
            this._hookPrototype('view.Layout', 'initialize', this._onHookLayoutInitialize);
            this._hookPrototype('view.Component', 'dispose', this._removeField);

        };

        /**
         * Helper method to hook a method of a given sidecar component.
         */
        Debug.prototype._hookPrototype = function(objectName, method, action) {
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
                ret = original.apply(this, arguments);
                action.apply(this, arguments);
                return ret;
            };
        };

        Debug.prototype._addCidAttr = function() {
            this.$el.attr('data-debug-cid', this.cid);
            _components[this.cid] = this;
        };

        Debug.prototype._onHookLayoutInitialize = function() {
            this.$el.attr('data-debug-cid', this.cid);
            this.debugType = 'layout';
            _components[this.cid] = this;
        }

        Debug.prototype._onHookViewInitialize = function() {
            this.$el.attr('data-debug-cid', this.cid);
            this.debugType = 'view';
            _components[this.cid] = this;
        }

        Debug.prototype._onHookFieldInitialize = function() {
            this.$el.attr('data-debug-cid', this.cid);
            this.debugType = 'field';
            _components[this.cid] = this;
        }

        Debug.prototype._removeField = function() {
            delete _components[this.cid];
        };

        Debug.prototype.getComponent = function(cid) {
            return _components[cid];
        };
        return Debug;

    })();

    Sidecar.debug = new Sidecar.Debug();

}).call(this);
