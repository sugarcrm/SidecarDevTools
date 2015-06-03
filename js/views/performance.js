(function() {
    var BDT = window.BDT;

    BDT.views.Performance = Backbone.View.extend({

        className: 'performance',
        template: BDT.templates['performance'],
        events: {
            'click #simulate': 'getRenderTime',
            'click #simulateAll': 'getAllRenderTimes',
            'click #clearAll': 'clearTable'
        },

        /**
         * Sets the available field types and calls render.
         */
        initialize: function() {
            this.fields = [];
            this.rows = [];

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

        getRenderTime: function(field) {
            var result;
            var self = this;
            var fieldType = typeof field === 'string' ? field : this.$('select[name=fieldType]').val();
            var iterations = this.$('select[name=iterations]').val();
            var template = this.$('select[name=template]').val();
            BDT.page.eval('measureRenderTime', [fieldType, iterations, template], function(average, isException) {
                if (isException) {
                }
                else {
                    if (average) {
                        result = {fieldType: fieldType, average: (Math.round( average * 10 ) / 10)};
                        self.rows.push(result);
                        self.$('#results-table tbody').append('<tr><td>' + result.fieldType + '</td><td>' + result.average + '</td></tr>');
                        $("#results-table").tablesorter();
                    }
                }
            });
        },

        getAllRenderTimes: function() {
            for (var i = 0; i < this.fields.length; i++) {
                this.getRenderTime(this.fields[i]);
            }
        },

        clearTable: function() {
            this.rows = [];
            this.render();
        }
    });
})();
