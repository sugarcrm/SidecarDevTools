/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {
    var BDT = window.BDT;

    BDT.views.PerfReport = Backbone.View.extend({

        className: 'perf-report',
        template: BDT.templates['perf-report'],
        events: {
            'click i[data-action=toggleHelp]': 'toggleHelpPanel',
            'click a[data-id]': 'displayTable',
            'click button[data-action=refresh]': 'getTable'
        },

        /**
         * Sets the available field types and calls render.
         */
        initialize: function() {
            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;

            this.getTable();
        },

        /**
         * Gets the table data and populates the table.
         */
        getTable: function() {
            this.fields = {};
            this.views = {};
            this.layouts = {};

            var self = this;
            BDT.page.eval('getLayoutStructure', null, function(result, isException) {
                if (isException) {
                } else {
                    if (result) {
                        self.populateComponents(result);
                        self.render();
                    }
                }
            });
        },

        /**
         * Populates the properties `fields`, `layouts` and `views` with the
         * info containing the render times and the number of renders.
         *
         * @param {Object} component The parent component containing all the
         * components of the current page.
         */
        populateComponents: function(component) {
            switch (component.compType) {
                case 'layout':
                    this.updateComponentPerf('layouts', component);
                    break;
                case 'view':
                    this.updateComponentPerf('views', component);
                    break;
                case 'field':
                    this.updateComponentPerf('fields', component);
                    break;
            }
            if (component.components && component.components.length > 0) {
                _.each(component.components, function (comp) {
                    this.populateComponents(comp);
                }, this);
            } else if (component.fields && component.fields.length > 0) {
                _.each(component.fields, function (field) {
                    this.populateComponents(field);
                }, this);
            }
        },

        /**
         * Updates the performance data of a component.
         *
         * @param {string} compType The component type (`field`, `view` or `layout`)
         * @param {Object} component The component data.
         */
        updateComponentPerf: function(compType, component) {
            var formattedComp = this[compType][component.name];
            if (_.isUndefined(formattedComp)) {
                this[compType][component.name] = {
                    type: component.type,
                    name: component.name,
                    avgPerf: component.performance,
                    totalPerf: component.performance,
                    renderCount: component.renderCount,
                    count: 1
                };
            } else {
                if (formattedComp.totalPerf && _.isNumber(component.performance)) {
                    formattedComp.count++;
                    formattedComp.totalPerf += component.performance;
                    formattedComp.avgPerf = Math.round((formattedComp.totalPerf/formattedComp.count)*10)/10;
                    formattedComp.renderCount += component.renderCount;
                }
            }
        },

        /**
         * Toggles the help panel.
         *
         * @param {Event} The `click` event.
         */
        toggleHelpPanel: function(event) {
            this.$('[data-panel=help]').toggle();
            this.displayHelp = !this.displayHelp;
            $(event.currentTarget).toggleClass('open', this.displayHelp);
        },

        /**
         * Displays the table corresponding to the clicked component type.
         *
         * @param {Event} The `click` event.
         */
        displayTable: function(event) {
            $('table[data-id]').addClass('hide');
            $('a[data-id]').removeClass('active');

            $(event.currentTarget).addClass('active');
            $('table[data-id='+ $(event.currentTarget).data('id') + ']').removeClass('hide');
        },

        /**
         * Renders the table.
         *
         * @return {window.BDT.views.PerfReport}
         */
        render: function() {
            this.$el.empty().append(this.template(this));
            $('table[data-id]').tablesorter();

            return this;
        },
    });
})();
