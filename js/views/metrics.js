(function() {
    var BDT = window.BDT;

    BDT.views.Metrics = Backbone.View.extend({
        className: 'metrics',
        template: BDT.templates['metrics'],
        events: {
            'click #trackMethod': 'trackMethodTime',
            'click #clearAll': 'clearTable',
            'change select[name=Type]': 'selectType',
            'change select[name=Component]': 'selectComponent',
            'click i[data-action=toggleHelp]': 'toggleHelpPanel'
        },

        /**
         * Sets the available field types and calls render.
         */
        initialize: function() {
            this.types = [{type: 'fields'}, {type: 'views'}, {type: 'layouts'}];
            this.components = [];
            this.methods = [];
            this.rows = [];
            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;
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

        selectType: function(event) {
            var type = $(event.target).val();
            this.components = [];
            this.methods = [];
            this.getComponents(type);
        },

        selectComponent: function(event) {
            var componentName = $(event.target).val();
            this.methods = [];
            this.getMethods(componentName);
        },

        getComponents: function(typeName) {
            var self = this;
            chrome.devtools.inspectedWindow.eval(
                'Object.keys(App.metadata.get().' + typeName + ')',
                function(results, isException) {
                    if (isException) {
                    }
                    else {
                        if (results) {
                            results = _.map(results, function(result) {
                                return {name: result, type: typeName};
                            });
                            self.components = results;
                            self.types = [{type: 'fields'}, {type: 'views'}, {type: 'layouts'}];
                            self.types = _.map(self.types, function(type) {
                                if (type.type === typeName) {
                                    return {type: type.type, selected: true};
                                } else {
                                    return type;
                                }
                            });
                            self.render();
                        }
                    }
                }
            );
        },

        getMethods: function(componentName) {
            var type = $('select[name=Type]').val();

            // Updating the components array to add 'selected'.
            this.components = _.map(this.components, function(component) {
                if (component.name === componentName) {
                    return {name: component.name, type: component.type, selected: true};
                } else {
                    return component;
                }
            });

            var componentClassName = this._parseComponentName(type, componentName);
            var self = this;

            BDT.page.eval('getComponentMethods', [type, componentClassName], function(results, isException) {
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

        _parseComponentName: function (type, component) {
            var compClassName = '';
            var capitalizedType = type.charAt(0).toUpperCase() + type.slice(1, type.length - 1);
            component = component.split('-');
            _.each(component, function(componentChunk) {
                compClassName += componentChunk.charAt(0).toUpperCase() + componentChunk.slice(1);
            });
            return compClassName = 'Base' + compClassName + capitalizedType;
        },

        trackMethodTime: function(event) {
            BDT.page.eval('trackMethodTime', [component])
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
