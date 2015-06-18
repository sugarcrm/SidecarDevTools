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

        filters: {
            'appevents': {
                display: true,
                label: 'Global app events'
            },
            'initialize': {
                display: true,
                label: 'Components initializing'
            },
            'render': {
                display: true,
                label: 'Components rendering'
            },
            'trigger': {
                display: true,
                label: 'Events triggered by components'
            }
        },

        activityTypeFilter: {
            'app.event': 'appevents',
            'layout.initialize': 'initialize',
            'view.initialize': 'initialize',
            'field.initialize': 'initialize',
            'layout.render': 'render',
            'view.render': 'render',
            'field.render': 'render',
            'layout.trigger': 'trigger',
            'view.trigger': 'trigger',
            'field.trigger': 'trigger'
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
            if (!_.isEmpty(diff)) {
                this._renderActivities(diff);
            }
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
                $tableList.prepend(this.itemTemplate({date: key, items: this._addDisplayFlag(activity)}));
            }, this);
        },

        /**
         * Adds a flag on every item to know if we should show it or not.
         *
         * @param items
         * @return {Object[]}
         * @private
         */
        _addDisplayFlag: function(items) {
            return _.map(items, function(item) {
                var filterType = this.activityTypeFilter[item.type];
                item.display = filterType && (_.isUndefined(this.filters[filterType]) || this.filters[filterType].display);
                item.filterType = filterType;
                return item;
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
            var type = $el.attr('name').substr(7);
            if (this.filters[type]) {
                this.$('[data-filterType="' + type + '"]').toggle();
                this.filters[type].display = !this.filters[type].display;
            }
        }
    });
})();
