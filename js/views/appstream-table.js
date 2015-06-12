(function() {
    var BDT = window.BDT;

    BDT.views.AppStreamTable = Backbone.View.extend({

        template: BDT.templates['appstream-table'],
        itemTemplate: BDT.templates['appstream-item'],

        events: {
            'click [data-console]': 'consoleArgs',
            'click [data-consolecomp]': 'consoleComponent',
            'click [type="checkbox"]': 'toggleActivityType'
        },

        /**
         * @inheritDoc
         */
        render: function() {
            this.$el.html(this.template(this));
            return this;
        },

        setData: function(activities) {
            var beforeData = this._data || {};
            var afterData = this._data = activities._byDate;
            this.types = _.keys(activities._byType);
            var diff = _.omit(afterData, _.keys(beforeData));
            this._renderActivities(diff);
        },

        /**
         * Renders and appends the activities one by one to the stream dom.
         * @param activities
         * @private
         */
        _renderActivities: function(activities) {
            var $tableList = this.$('[data-role=tablelist]');
            _.each(activities, function(activity, key) {
                activity.reverse();
                $tableList.prepend(this.itemTemplate({date: key, items: activity}));
            }, this);
        },

        consoleArgs: function(event) {
            var el = event.target;
            var $el = this.$(el);
            var id = $el.data('console');
            BDT.page.eval('consoleActivityArgs', [id],
                function() {
                }
            );
        },

        consoleComponent: function(event) {
            var el = event.target;
            var $el = this.$(el);
            var id = $el.data('consolecomp');
            BDT.page.eval('consoleActivityComponent', [id],
                function() {
                }
            );
        },

        toggleActivityType: function(event) {
            var $el = $(event.currentTarget);
            var type = $el.attr('name');
            switch(type) {
                case 'toggle-app-events':
                    this.$('[data-type="app.event"]').toggle();
                    break;
                case 'toggle-initialize':
                    this.$('[data-type="field.initialize"]').toggle();
                    this.$('[data-type="view.initialize"]').toggle();
                    this.$('[data-type="layout.initialize"]').toggle();
                    break;
                case 'toggle-render':
                    this.$('[data-type="field.render"]').toggle();
                    this.$('[data-type="view.render"]').toggle();
                    this.$('[data-type="layout.render"]').toggle();
                    break;
                case 'toggle-trigger':
                    this.$('[data-type="field.trigger"]').toggle();
                    this.$('[data-type="view.trigger"]').toggle();
                    this.$('[data-type="layout.trigger"]').toggle();
                    break;
            }
        }
    });
})();
