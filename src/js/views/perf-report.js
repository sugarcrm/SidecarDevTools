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
        },
        /**
         * Sets the available field types and calls render.
         */
        initialize: function() {
            this.fields = {};
            this.views = {};
            this.layouts = {};
            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;

            var self = this;
            BDT.page.eval('getLayoutStructure', null, function(result, isException) {
                if (isException) {
                } else {
                    if (result) {
                        //self.component = result;
                        self.populateComponents(result);
                        self.render();
                    }
                }
            });


        },

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

        updateComponentPerf: function(bucket, component) {
            var formattedComp = this[bucket][component.name];
            if (_.isUndefined(formattedComp)) {
                this[bucket][component.name] = {
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
                    formattedComp.avgPerf = formattedComp.totalPerf/formattedComp.count;
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

        displayTable: function(event) {
            $('table[data-id]').addClass('hide');
            $('a[data-id]').removeClass('active');

            $(event.currentTarget).addClass('active');
            $('table[data-id='+ $(event.currentTarget).data('id') + ']').removeClass('hide');
        },

        /**
         * Renders the view printing the structure.
         *
         * @return {window.BDT.views.Structure}
         */
        render: function() {
            this.$el.empty().append(this.template(this));
            $('table[data-id]').tablesorter();

            return this;
        },
    });
})();
