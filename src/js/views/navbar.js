/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {

  var BDT = window.BDT;

  BDT.views.Navbar = Backbone.View.extend({

    template: BDT.templates['navbar'],

    render: function() {
      this.$el.empty().append(this.template());
      this.$el.attr('tabindex', 0);
      this.trigger('select', '#general');
      return this;
    },

    events: {
      'click a': 'selectItem'
    },

    selectItem: function(evt) {
      var callback = function(result, isException) {
        if (isException) {
        } else {
            BDT.debugMode = result;
            evt.preventDefault();
            var anchor = $(evt.currentTarget);
            anchor.addClass('selected').siblings().removeClass('selected');
            this.trigger('select', anchor.attr('href'));
        }
      }

      BDT.page.eval('isDebugMode', [], _.bind(callback, this));
    },
  });
})();
