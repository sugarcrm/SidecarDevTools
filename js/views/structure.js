(function() {
    var BDT = window.BDT;

    BDT.views.Structure = Backbone.View.extend({

        className: 'structure',
        template: BDT.templates['structure'],
        events: {
            'click #expandAll': 'expandAll',
            'click #collapseAll': 'collapseAll',
            'click #toggleAllCtx': 'toggleAllContexts',
            'click [data-action=toggle-context]': 'toggleContext'
        },

        initialize: function() {
            /**
             * Boolean set to `true` when all contexts are displayed on the page.
             *
             * @property {boolean} contextsShown
             */
            this.contextsShown = false;
            /**
             * A hash containing contexts with their matching color.
             *
             * @property {Object} contextColors
             */
            this.contextColors = {};

            /**
             * The structure of the inspected page.
             *
             * This object contains the sidecar components present on the page
             * (sidecar views and layouts), the hierarchy of components in the
             * object respects the sidecar structure of the inspected page.
             *
             * @property {Object}
             */
            this.component = {};

            /**
             * A port with background page for continuous message communication.
             *
             * @property {Object}
             */
            this.backgroundPageConnection =
                chrome.runtime.connect({
                    name: "communication"
                });

            var self = this;
            chrome.devtools.inspectedWindow.eval(
                'App.controller.layout.getComponentInfo()',
                function(result, isException) {
                    if (isException) {
                    }
                    else {
                        if (result) {
                            self.component = result;
                            self.render();
                        }
                    }
                }
            );

            // Listening to messages from the content script.
            this.backgroundPageConnection.onMessage.addListener(_.bind(function(msg, port) {
                // Do something.
            }, this));
        },

        /**
         * Renders the view printing the structure.
         *
         * @return {window.BDT.views.Structure}
         */
        render: function() {
            if (this.component) {
                this.$el.empty().append(this.template());
                this.$('.accordion').append(this.printComponent(this.component));
            }

            $(document).foundation({
                accordion: {
                    multi_expand: true
                }
            });
            return this;
        },

        /**
         * Prints a component and it's children in an accordion.
         *
         * @param {Object} comp The component to display.
         * @return {jQuery} The created DOM element.
         */
        printComponent: function(comp) {
            // TODO This part should be moved to a template.
            var $el = $('<li class="accordion-navigation panel-accordion-navigation"></li>')
                .append('<a href="#' + comp.cid + '" class="comp-link" name="' + comp.cid + '">' +
                    '<span class="name">' + comp.name + '</span>' +
                    ' - type: ' + comp.type +
                    ' - context: ' + comp.contextId +
                    ' - cid: ' + comp.cid +
                    '</a>' +
                    '<input type="checkbox" class="comp-checkbox" name="' + comp.cid + '" data-context-id="' + comp.contextId + '" data-type="' + comp.compType + '" data-action="toggle-context">');

            if (comp.compType === 'layout') {
                $el.addClass('layout');
            } else {
                $el.addClass('view');
            }

            if (comp.components && comp.components.length > 0) {
                $el.append('<div id="' + comp.cid + '" class="content"></div>');
                $el.find('#'.concat(comp.cid)).append('<ul class="accordion panel-accordion" data-accordion></ul>');
                for (var i in comp.components) {
                    $el.find('#'.concat(comp.cid) + '> .accordion').append(this.printComponent(comp.components[i]));
                }
            }
            return $el;
        },

        /**
         * Expands all accordions to display the full page structure.
         */
        expandAll: function() {
            this.$('.accordion li').removeClass('active').addClass('active');
            this.$('.accordion li > .content').removeClass('active').addClass('active');
        },

        /**
         * Collapses all accordions.
         */
        collapseAll: function() {
            $('.accordion li').removeClass('active');
            $('.accordion li > .content').removeClass('active');
        },

        /**
         * Displays all the different contexts on the page by adding a
         * colorized overlay on each component (sidecar view or layout).
         * Each context has one corresponding color.
         */
        toggleAllContexts: function() {
            this.contextsShown = !this.contextsShown;

            if (!this.contextsShown) {
                this.backgroundPageConnection.postMessage({
                    tabId: chrome.devtools.inspectedWindow.tabId,
                    clearAllContext: true
                });
                this.$('[data-action=toggle-context]').prop('checked', false);
            } else {
                this.colorizeContext(this.component, true);
                this.$('[data-action=toggle-context]').prop('checked', true);
            }
        },

        /**
         * Toggles the context displaying of one component.
         *
         * @param {Event} event The click event.
         */
        toggleContext: function(event) {
            var $checkbox = $(event.target);
            var isChecked = $checkbox.is(':checked');
            this.colorizeContext({cid: $checkbox.prop('name'), contextId: $checkbox.data('context-id'), clearContext: !isChecked}, false);
        },

        /**
         * Colorizes the passed component in the inspected window with its
         * assigned context color.
         *
         * @param {Object} comp The component to colorize.
         * @param {boolean} recursive Boolean to tell if we should colorize also children
         * components.
         */
        colorizeContext: function(comp, recursive) {
            this.contextColors[comp.contextId] = this.contextColors[comp.contextId] || this.getRandomColor();
            this.backgroundPageConnection.postMessage({
                tabId: chrome.devtools.inspectedWindow.tabId,
                cid: comp.cid,
                color: comp.clearContext ? false : this.contextColors[comp.contextId]
            });

            if (recursive === false) {
                return;
            }

            _.each(comp.components, this.colorizeContext, this);
        },

        /**
         * Generates a random color.
         *
         * @return {string} color The generated color.
         */
        getRandomColor: function() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    });
})();
