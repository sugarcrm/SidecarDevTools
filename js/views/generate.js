(function() {
    var BDT = window.BDT;

    BDT.views.Generate = Backbone.View.extend({

        className: 'generate',
        template: BDT.templates['generate'],
        events: {
            'click input[name=submitGenerate]' : 'generateRecords'
        },

        /**
         * Sets the available modules and call render.
         */
        initialize: function() {
            this.modules = [];

            var self = this;
            chrome.devtools.inspectedWindow.eval(
                'App.metadata.getModuleNames(\'enabled\')',
                function(result, isException) {
                    if (isException) {
                    }
                    else {
                        if (result) {
                            self.modules = result;
                            self.render();
                        }
                    }
                }
            );
        },


        /**
         * Renders the form.
         *
         * @return {window.BDT.views.Structure}
         */
        render: function() {
            this.$el.empty().append(this.template(this));

            return this;
        },

        /**
         * Generates records according to the values filled in the form.
         */
        generateRecords: function() {
            var module = this.$('select[name=Module]').val();
            var numberOfRecords = this.$('input[name=numberOfRecords]').val();
            var attributes = this.$('textarea[name=attributes]').val();
            _.isEmpty(attributes) ? [] : attributes;
            var options = this.$('textarea[name=options]').val();
            _.isEmpty(options) ? [] : options;

            BDT.page.eval('generateRecords', [module, attributes, options, numberOfRecords], function(result, isException) {
                if (isException) {
                    var error = 'console.error("The records couldn\'t be created. Please check that the passed object are JSON formatted with double quotes.");'
                    chrome.devtools.inspectedWindow.eval(error);
                }
                else {
                    if (result) {
                    }
                }
            });
        }
    });
})();
