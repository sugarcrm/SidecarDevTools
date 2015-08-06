/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {
    var BDT = window.BDT;

    BDT.views.AppStream = Backbone.View.extend({

        className: 'appstream',
        template: BDT.templates['appstream'],

        events: {
            'click button[data-action=clear]': 'clear',
            'click i[data-action=toggleHelp]': 'toggleHelpPanel'
        },

        initialize: function() {
            this.setCollections();
            this.tableView = new BDT.views.AppStreamTable();
            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;
        },

        setCollections: function(activities) {
            this.activities = {};
            this.activities.all = [];
            this.activities._byId = {};
            this.activities._byDate = {};
            this.activities._byType = {};

            if (!activities || !activities.length) {
                return;
            }

            //activities = activities.slice(-50);
            this.activities.all = activities;
            _.each(activities, function(a) {
                a = this.patchActivity(a);
                this.activities._byId[a.id] = a;
                this.activities._byDate[a.createdAt] = this.activities._byDate[a.createdAt] || [];
                this.activities._byDate[a.createdAt].push(a);
                this.activities._byType[a.type] = this.activities._byType[a.type] || [];
                this.activities._byType[a.type].push(a);
            }, this);
        },

        /**
         * @inheritDoc
         */
        render: function() {
            var self = this;

            // Clear interval if one exists
            if (this.polling) {
                window.clearInterval(this.polling);
            }

            // Fetch and render activities every 100ms.
            this.polling = window.setInterval(function() {
                self.fetchActivities({success: _.bind(self._onFetchSuccess, self)});
            }, 500);

            this.$el.html(this.template(this));

            this.$tableView = this.$('[data-view=table]');
            this.$tableView.append(this.tableView.render().el);

            return this;
        },

        updateViews: function() {
            this.tableView.setData(this.activities);
        },

        /**
         * Renders the list of activities.
         *
         * @param {Array} activities
         */
        _onFetchSuccess: function(activities) {
            if (
                this.beforeFetch.length === activities.length &&
                _.isEqual(this.beforeFetch1, activities[0])
            ) {
                // same size, everything is rendered already
                return;
            }
            this.setCollections(activities);
            this.updateViews();
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
         * Gets the activity stream from the inspected window.
         *
         * @param {Object} options
         * @param {Function} [options.success] Success callback.
         * @param {Function} [options.error] Error callback.
         * @param {Function} [options.complete] Complete callback.
         */
        fetchActivities: function(options) {

            this.beforeFetch = this.activities.all;
            this.beforeFetch1 = this.activities.all[0];

            chrome.devtools.inspectedWindow.eval(
                'App.debug.AppStream.toJSON().slice(-300)',
                function(result, isException) {
                    if (isException) {
                        options.error && options.error();
                    }
                    else {
                        options.success && options.success(result);
                    }
                    options.complete && options.complete(result, isException);
                }
            );
        },

        /**
         * Clears the app stream.
         */
        clear: function() {
            var self = this;
            chrome.devtools.inspectedWindow.eval(
                'App.debug.AppStream.reset()',
                function(result, isException) {
                    if (isException) {
                    }
                    else {
                        self.setCollections();
                        self.tableView.$el.empty();
                        self.tableView.render();
                        self.updateViews();
                    }
                }
            );
        },

        patchActivity: function(act) {
            switch (act.type) {
                case 'layout.initialize':
                    var name = this.getEscapedValue(act.layout.name);
                    act.name = name;
                    act.label = 'Layout <strong>' + name + '</strong> initialized.';
                    act.label = new Handlebars.SafeString(act.label);
                    act.css_class = 'activity-layout';
                    act.label_class = 'activity-layout';
                    break;
                case 'layout.render':
                    var name = this.getEscapedValue(act.layout.name);
                    act.name = name;
                    act.label = 'Layout <strong>' + name + '</strong> rendered.';
                    act.label = new Handlebars.SafeString(act.label);
                    act.css_class = 'activity-layout';
                    act.label_class = 'activity-layout';
                    break;
                case 'layout.trigger':
                    var name = this.getEscapedValue(act.layout.name);
                    var event = this.getEscapedValue(act.event);
                    act.name = name;
                    act.label = 'Layout <strong>' + name + '</strong> triggered event <strong>' + event + '</strong>.';
                    act.label = new Handlebars.SafeString(act.label);
                    act.label_class = 'activity-layout';
                    act.css_class = 'activity-layout';
                    break;
                case 'view.initialize':
                    var name = this.getEscapedValue(act.view.name);
                    act.name = name;
                    act.label = 'View <strong>' + name + '</strong> initialized.';
                    act.label = new Handlebars.SafeString(act.label);
                    act.css_class = 'activity-view';
                    act.label_class = 'activity-view';
                    break;
                case 'view.render':
                    var name = this.getEscapedValue(act.view.name);
                    var tplName = this.getEscapedValue(act.view.tplName);
                    var action = this.getEscapedValue(act.view.action);
                    act.name = name;
                    act.label = 'View <strong>' + name + '</strong> rendered (template: <strong>' + tplName + '</strong>, action: <strong>' + action + '</strong>).';
                    act.label = new Handlebars.SafeString(act.label);
                    act.css_class = 'activity-view';
                    act.label_class = 'activity-view';
                    break;
                case 'view.trigger':
                    var name = this.getEscapedValue(act.view.name);
                    var event = this.getEscapedValue(act.event);
                    act.name = name;
                    act.label = 'View <strong>' + name + '</strong> triggered event <strong>' + event + '</strong>.';
                    act.label = new Handlebars.SafeString(act.label);
                    act.label_class = 'activity-view';
                    act.css_class = 'activity-view';
                    break;
                case 'field.initialize':
                    var name = this.getEscapedValue(act.field.name);
                    var type = this.getEscapedValue(act.field.type);
                    act.name = name;
                    act.label = 'Field (name: <strong>' + name + '</strong>, type: <strong>' + type + '</strong>) initialized.';
                    act.label = new Handlebars.SafeString(act.label);
                    act.css_class = 'activity-field';
                    act.label_class = 'activity-field';
                    break;
                case 'field.render':
                    var name = this.getEscapedValue(act.field.name);
                    var type = this.getEscapedValue(act.field.type);
                    var tplName = this.getEscapedValue(act.field.tplName);
                    var action = this.getEscapedValue(act.field.action);
                    act.name = name;
                    act.label = 'Field <strong>' + name + '</strong> rendered (template: <strong>' + tplName + '</strong>, action: <strong>' + action + '</strong>).';
                    act.label = new Handlebars.SafeString(act.label);
                    act.label_class = 'activity-field';
                    act.css_class = 'activity-field';
                    break;
                case 'field.trigger':
                    var name = this.getEscapedValue(act.field.name);
                    var event = this.getEscapedValue(act.event);
                    act.name = name;
                    act.label = 'Field <strong>' + name + '</strong> triggered event <strong>' + event + '</strong>.';
                    act.label = new Handlebars.SafeString(act.label);
                    act.label_class = 'activity-field';
                    act.css_class = 'activity-field';
                    break;
                default:
                    act.label = act.event ||
                    act.layout ||
                    act.module ||
                    act.type;
                    act.label_class = act.type;
                    act.name = act.label;
                    if (act.event === 'data:sync:start') {
                        act.label = act.label + ', operation: ' + act.operation;
                    }
            }
            act.hasPerformance = act.performance >= 0;
            act.is0ms = act.performance === 0;
            return act;
        },

        getEscapedValue: function(value) {
            value = value || '<undefined>';
            return Handlebars.Utils.escapeExpression(value);
        },

        /**
         * @inheritDoc
         */
        remove: function() {
            window.clearInterval(this.polling);
            Backbone.View.prototype.remove.call(this);
        }
    });

})();
