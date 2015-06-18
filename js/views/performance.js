(function() {
    var BDT = window.BDT;

    BDT.views.Performance = Backbone.View.extend({

        className: 'performance',
        template: BDT.templates['performance'],
        events: {
            'click #simulate': 'simulateRenderTime',
            'click #simulateAll': 'simulateAllRenderTimes',
            'click #clearAll': 'clearTable',
            'click i[data-action=toggleHelp]': 'toggleHelpPanel'
        },

        /**
         * Sets the available field types and calls render.
         */
        initialize: function() {
            this.fields = [];
            this.rows = [];
            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;

            var self = this;
            chrome.devtools.inspectedWindow.eval(
                'Object.keys(App.metadata.get().fields)',
                function(result, isException) {
                    if (isException) {
                    }
                    else {
                        if (result) {
                            self.fields = result;
                            self.render();
                        }
                    }
                }
            );
        },

        /**
         * Renders the view printing the structure.
         *
         * @return {window.BDT.views.Structure}
         */
        render: function() {
            this.$el.empty().append(this.template(this));

            $("#results-table").tablesorter();
            return this;
        },

        /**
         * Simulates a render for the selected field and prints the duration of
         * rendering in the table.
         */
        simulateRenderTime: function() {
          var fieldType = this.$('select[name=fieldType]').val();
          this.getRenderTime(fieldType);
        },

        /**
         * Gets the time to render and prints it in the table.
         * @param field
         */
        getRenderTime: function(fieldType) {
            var result;
            var self = this;
            var iterations = this.$('select[name=iterations]').val();
            var template = this.$('select[name=template]').val();
            BDT.page.eval('measureRenderTime', [fieldType, iterations, template], function(totalTime, isException) {
                if (isException) {
                }
                else {
                    if (totalTime) {
                        result = {fieldType: fieldType, totalTime: totalTime, averageTime: (Math.round((totalTime/iterations) * 10 ) / 10)};
                        self.rows.push(result);
                        self.$('#results-table tbody').append('<tr><td>' + result.fieldType + '</td><td>' + result.totalTime + '</td><td>' + result.averageTime + '</td></tr>');
                        $("#results-table").tablesorter();
                    }
                }
            });
        },

        /**
         * Simulate render for every available fields and prints the durations.
         */
        simulateAllRenderTimes: function() {
            for (var i = 0; i < this.fields.length; i++) {
                this.getRenderTime(this.fields[i]);
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
         * Clears the table.
         */
        clearTable: function() {
            this.rows = [];
            this.render();
        }
    });
})();
