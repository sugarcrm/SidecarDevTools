(function() {
    var BDT = window.BDT;

    BDT.views.Generate = Backbone.View.extend({

        className: 'generate',
        template: BDT.templates['generate'],
        events: {
            'click input[name=submitGenerate]' : 'generateRecords',
            'click input[id=currentContext]' : 'setCurrentContext',
            'click i[data-action=toggleHelp]': 'toggleHelpPanel'
        },

        /**
         * Sets the available modules and call render.
         */
        initialize: function() {
            this.modules = [];
            this.subpanels = [];
            this.useCurrentContext = false;
            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;

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

            if (this.useCurrentContext) {
                if (this.$('select[name=Subpanel]').val()) {
                    this._generateRelatedRecords(module, attributes, numberOfRecords);
                } else {
                    this._generateRecords(module, attributes, numberOfRecords, options, true);
                }
            } else {
                this._generateRecords(module, attributes, numberOfRecords, options, false);
            }
        },

        _generateRecords: function(module, attributes, numberOfRecords, options, addToCollection) {
            BDT.page.eval('generateRecords', [module, attributes, numberOfRecords, options, addToCollection], function(result, isException) {
                if (isException) {
                    var error = 'console.error("The records couldn\'t be created. Please check that the passed object are JSON formatted with double quotes.");'
                    chrome.devtools.inspectedWindow.eval(error);
                } else {
                    if (result) {
                    }
                }
            });
        },

        _generateRelatedRecords: function(module, attributes, numberOfRecords) {
            var subpanel = this.$('select[name=Subpanel]').val();
            BDT.page.eval('generateRelatedRecords', [module, subpanel, attributes, numberOfRecords], function(result, isException) {
                if (isException) {
                    var error = 'console.error("The records couldn\'t be created. Please check that the passed object are JSON formatted with double quotes.");'
                    chrome.devtools.inspectedWindow.eval(error);
                } else {
                    if (result) {
                    }
                }
            });
        },

        setCurrentContext: function() {
            if (this.useCurrentContext) {
                this.useCurrentContext = false;
                this.subpanels = [];
                this.render();
            } else {
                this.getCurrentModule();
            }
        },

        getCurrentModule: function() {
            var self = this;
            BDT.page.eval('getCurrentModule', null, function(module, isException) {
                if (isException) {
                    console.error('Couldn\'t get the current module.');
                } else {
                    if (module) {
                        self.currentModule = module;
                        self.useCurrentContext = true;
                        self.getSubpanels(module);
                    }
                }
            });
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

        getSubpanels: function(module) {
            var self = this;
            BDT.page.eval('getSubpanels', [module], function(result, isException) {
                    if (isException) {
                        console.error('Couldn\'t load subpanels.');
                    } else {
                        if (result) {
                            self.subpanels = result;
                            self.render();
                            self.$('select[name="Module"]').val(self.currentModule);
                        }
                    }
                }
            );
        }
    });
})();
