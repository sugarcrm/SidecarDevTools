/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {
    var BDT = window.BDT;

    BDT.views.Generate = Backbone.View.extend({

        blackListedModules: ['Calls', 'Opportunities', 'RevenueLineItems', 'Forecasts',
            'pmse_inbox','pmse_Project', 'pmse_Business_Rules', 'pmse_Emails_Templates'],
        className: 'generate',
        template: BDT.templates['generate'],
        events: {
            'click button[name=submitGenerate]' : 'generateRecords',
            'click input[id=currentContext]' : 'setCurrentContext',
            'click i[data-action=toggleHelp]': 'toggleHelpPanel',
            'click a[data-id]': 'toggleSection',
        },

        /**
         * Sets the available modules and call render.
         */
        initialize: function() {
            this.modules = [];
            this.subpanels = [];
            this.useCurrentContext = false;

            /**
             * Indicates if the records should be generated using dummy data or
             * with manually input data.
             *
             * @type {boolean} `true` to generate with dummy data.
             */
            this.generateAuto = true;

            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;

            var self = this;
            BDT.page.eval('getModulesForGenerate', [], (result, isException) => {
                if (isException) {
                }
                else {
                    if (result) {
                        self.modules = _.difference(result, self.blackListedModules);
                        self.render();
                    }
                }
            });
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
            if (this.generateAuto) {
                this.generateRecordsAuto();
            } else {
                var module = this.$('#generateAuto, #generateManual').not('.hide').find('select[name=Module]').val();
                var numberOfRecords = this.$('#generateAuto, #generateManual').not('.hide').find('input[name=numberOfRecords]').val();
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

        /**
         * Generates records automatically populated with dummy data
         * (using faker.js)
         */
        generateRecordsAuto: function() {
            var module = this.$('#generateAuto, #generateManual').not('.hide').find('select[name=Module]').val();
            var numberOfRecords = this.$('#generateAuto, #generateManual').not('.hide').find('input[name=numberOfRecords]').val();

            BDT.page.eval('getModuleFields', [module], (fields, isException) => {
                if (isException) {
                    BDT.page.eval('console', ['error', '`getModuleFields` could not get the results.']);
                } else {
                    if (fields) {
                        fields = _.omit(fields, BDT.generate.blackList);

                        let attributesArray = [];
                        for (let i=0; i < numberOfRecords; i++) {
                            let attributes = {};
                            _.each(fields, (meta, fieldName) => {
                                let dataMap = BDT.generate.dataMap;
                                let value;

                                // Set the specific value if we have one defined
                                // in the data-mapper.
                                if (dataMap.fixedValues[module] && dataMap.fixedValues[module][fieldName]) {
                                    value = dataMap.fixedValues[module][fieldName];
                                    // Else, generate a value using faker.js.
                                } else {
                                    // If the field name is not defined in the
                                    // mapping, fallback to the 'type' mapping.
                                    let fakerField = dataMap.fieldNames[fieldName] || dataMap.fieldTypes[meta.type];

                                    if (fakerField) {
                                        let fakerFieldArray = fakerField.split('.');
                                        value = faker[fakerFieldArray[0]][fakerFieldArray[1]]();
                                    }
                                }

                                attributes[fieldName] = value;
                            });

                            attributesArray.push(attributes);
                        }
                        this._generateRecords(module, JSON.stringify(attributesArray), numberOfRecords, [], false);
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
        },

        /**
         * Displays the corresponding section content.
         *
         * @param {Event} The `click` event.
         */
        toggleSection: function(event) {
            var mode = $(event.currentTarget).data('id');

            this.generateAuto = mode === 'generateAuto';

            // Update buttons background
            $('a[data-id]').removeClass('active');
            $(event.currentTarget).addClass('active');

            // Show the relevant section.
            $('#generateAuto, #generateManual').addClass('hide');
            $('div[id='+ mode + ']').removeClass('hide');
        },
    });
})();
