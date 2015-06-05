// Load this file immediately after backbone.debug.js.

(function() {

    /**
     * Adds a method to the `View.Layout` class to get information on the current
     * layout, and its child components.
     * It returns a hierarchical object of the sidecar components on the current
     * page.
     *
     * @return {Object} def The object containing the components of the current
     *   page.
     */
    App.view.Layout.prototype.getComponentInfo = function() {
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
    App.view.View.prototype.getComponentInfo = function() {
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

    /**
     * Overrides `initialize` method of `View.Component` to add the cid on the
     * DOM element of all sidecar components.
     */
    App.view.Component.prototype.initialize = (function() {
        var original = App.view.Component.prototype.initialize;
        return function() {
            original.apply(this, arguments);
            this.$el.attr('data-debug-cid', this.cid);
        }
    })();
})();
