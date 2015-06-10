(function() {
    var BDT = window.BDT;

    BDT.views.Breakpoints = Backbone.View.extend({

        className: 'breakpoints',
        template: BDT.templates['breakpoints'],
        events: {
            'click #simulate': 'simulateRenderTime',
            'click #simulateAll': 'simulateAllRenderTimes',
            'click #clearAll': 'clearTable',
            'change select[name=Type]': 'getComponents',
            'change select[name=Component]': 'getComponentMethods'
        },

        /**
         * Sets the available field types and calls render.
         */
        initialize: function() {
            this.types = [{type: 'fields'}, {type: 'views'}, {type: 'layouts'}];
            this.components = [];
            this.methods = [];
            this.rows = [];
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

        getComponents: function(event) {
            var type = $(event.target).val();
            var self = this;
            chrome.devtools.inspectedWindow.eval(
                'Object.keys(App.metadata.get().' + type + ')',
                function(results, isException) {
                    if (isException) {
                    }
                    else {
                        if (results) {
                            results = _.map(results, function(result) {
                                return {name: result, type: type};
                            });
                            self.components = results;
                            self.types = [{type: 'fields'}, {type: 'views'}, {type: 'layouts'}];
                            self.types = _.map(self.types, function(typeName) {
                                if (typeName.type === type) {
                                    return {type: typeName.type, selected: true};
                                } else {
                                    return typeName;
                                }
                            });
                            self.render();
                        }
                    }
                }
            );
        },

        getComponentMethods: function(event) {
            var componentName = $(event.target).val();
            var type = $('select[name=Type]').val();

            // Updating the components array to add 'selected'.
            this.components = _.map(this.components, function(component) {
                if (component.name === componentName) {
                    return {name: component.name, type: component.type, selected: true};
                } else {
                    return component;
                }
            });

            var self = this;

            BDT.page.eval('getComponentMethods', [type, componentName], function(results, isException) {
                if (isException) {
                } else {
                    if (results) {
                        results = _.map(results, function(result) {
                            return {name: result};
                        });
                        self.methods = results;

                        self.render();
                    }
                }
            });
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
         * Clears the table.
         */
        clearTable: function() {
            this.rows = [];
            this.render();
        }
    });
})();
