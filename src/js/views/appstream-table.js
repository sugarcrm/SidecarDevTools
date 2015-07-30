(function() {
    var BDT = window.BDT;

    BDT.views.AppStreamTable = Backbone.View.extend({

        template: BDT.templates['appstream-table'],
        itemTemplate: BDT.templates['appstream-item'],

        events: {
            'click [data-console]': 'consoleArgs',
            'click [data-consolecomp]': 'consoleComponent',
            'click [type="checkbox"]': 'toggleActivityType',
            'change select[name="activity_type"]': 'onChangeActivityType',
            'keyup input[name="component_name"]': 'throttledComponentNameSearch',
            'paste input[name="component_name"]': 'throttledComponentNameSearch'
        },

        filters: {
            'appevents': {
                display: true,
                label: 'Global app events',
                type: 'checkbox'
            },
            'initialize': {
                display: true,
                label: 'Components initializing',
                type: 'checkbox'
            },
            'render': {
                display: true,
                label: 'Components rendering',
                type: 'checkbox'
            },
            'trigger': {
                display: true,
                label: 'Events triggered by components',
                type: 'checkbox'
            },
            'activity_type': {
                label: 'Activity type',
                type: 'dropdown',
                options: [
                    ''
                ],
                value: ''
            },
            'component_name': {
                label: 'View/Field name',
                type: 'text',
                value: ''
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

        initialize: function(options) {
            // reuse activity type filter keys for convenience
            var activity_types = _.keys(this.activityTypeFilter);
            _.each(activity_types, function(value) {
                this.filters.activity_type.options.push(value);
            }, this);
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

                if(this.filters['activity_type'].value != '' && item.type != this.filters['activity_type'].value)
                {
                    item.display = false;
                }

                // sidecar component names
                var component_name_filter = this.filters['component_name'].value

                if(component_name_filter != ''
                    && item.name.toLowerCase().indexOf(component_name_filter.toLowerCase()) == -1)
                {
                    item.display = false;
                }
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
        },

        onChangeActivityType: function(event) {
            var value = $(event.currentTarget).val();

            this.filters['activity_type'].value = value;
            this.applyFilters();
        },

        /**
         * Lazy debounce for searching component names in the AppStream
         * @param event
         */
        throttledComponentNameSearch: _.debounce(function(event) {
            this.onChangeComponentName(event);
        }, 400),

        onChangeComponentName: function(event) {
            var value = $(event.currentTarget).val();

            this.filters['component_name'].value = value;
            this.applyFilters();
        },

        applyFilters: function() {
            var activity_type = this.filters['activity_type'].value,
                component_name = this.filters['component_name'].value,
                activity_selector = '',
                component_selector = '';

            if(activity_type != '') {
                activity_selector = '="' + activity_type + '"';
            }

            if(component_name != '') {
                component_selector = '*="' + component_name + '"';
            }

            var full_selector = 'tr[data-type' + activity_selector + '][data-component-name' + component_selector + ']';

            if(activity_type != '' || component_name != '') {
                var $hidden = this.$('tr[data-type]').not(full_selector),
                    $parent_table = $hidden.closest('table');

                if($parent_table.children('tr').length == ($hidden.length + 1)) {
                    $parent_table.hide();
                } else {
                    $hidden.hide();
                }
            }
            this.$(full_selector).closest('table').show();
            this.$(full_selector).show();
        }
    });
})();
