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
        },
        /**
         * Sets the available field types and calls render.
         */
        initialize: function() {
            this.fields = [];
            this.views = [];
            this.rows = [];
            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;

            var self = this;
            BDT.page.eval('getLayoutStructure', null, function(result, isException) {
                if (isException) {
                }
                else {
                    if (result) {
                        self.component = result;
                    }
                }
            });


        },

        populateComponents: function(component) {
            if (component.compType === 'layout') {
            _.each(component.components, function (component) {
                if
                    });
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
         * Renders the view printing the structure.
         *
         * @return {window.BDT.views.Structure}
         */
        render: function() {
            this.$el.empty().append(this.template(this));

            $("#views").tablesorter();
            $("#fields").tablesorter();
            return this;
        },
    });
})();
