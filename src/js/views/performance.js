(function() {
    var BDT = window.BDT;

    BDT.views.Performance = Backbone.View.extend({

        className: 'performance',
        template: BDT.templates['performance'],
        events: {
            'click #simulate': 'simulateRenderTime',
            'click #simulateAll': 'simulateAllRenderTimes',
            'click #clearAll': 'clearTable',
            'click i[data-action=toggleHelp]': 'toggleHelpPanel',
            'change [data-action=selectModule]': 'selectModule'
        },

        /**
         * Sets the available field types and calls render.
         */
        initialize: function() {
            this.fields = [];
            this.rows = [];
            this.module = 'base';
            /**
             * Array to contain the list of available modules.
             *
             * @property {array} modules
             */
            this.modules = [];
            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;

            var self = this;
            chrome.devtools.inspectedWindow.eval(
                'App.metadata.getModuleNames()',
                function(result, isException) {
                    if (isException) {
                        console.log('An error occurred retrieving module names');
                    } else if (result) {
                        result.unshift('base');
                        self.modules = result;

                        self.populateFields();
                    }
                }
            );
        },

        /**
         * Populates the fields to be displayed, based on the selected module
         */
        populateFields: function() {
            var self = this;
            var cmd;
            if (this.module === 'base') {
                cmd = 'Object.keys(_.isFunction(App.metadata.get) ? ' +
                'App.metadata.get().fields : App.metadata.getStrings(\'fields\'))';
            } else {
                cmd = 'Object.keys(App.metadata.getModule(\'' + this.module + '\').fields)';
            }

            chrome.devtools.inspectedWindow.eval(
                cmd,
                function(result, isException) {
                    if (isException) {
                    }
                    else if (result) {
                        self.fields = result;
                        self.render();
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
         * Updates the module and displayed fields to reflect the selected module
         */
        selectModule: function() {
            this.module = this.$('[data-action=selectModule]').val();
            this.populateFields();
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
            var module = this.module === 'base' ? null : this.module;
            var iterations = this.$('select[name=iterations]').val();
            var template = this.$('select[name=template]').val();
            var modelAttributes = this.$('[data-field=jsonAttributes]').val();
            modelAttributes = modelAttributes ? JSON.parse(attributes) : null;
            var viewDef = this.$('[data-field=viewDef]').val();
            viewDef = viewDef ? JSON.parse(viewDef) : {};
            BDT.page.eval('measureRenderTime', [module, fieldType, iterations,
                template, modelAttributes, viewDef], function(totalTime, isException) {
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
