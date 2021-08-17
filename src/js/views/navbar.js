/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {

  var BDT = window.BDT;

  BDT.views.Navbar = Backbone.View.extend({

    template: BDT.templates['navbar'],
    defaultView: '#general',

    render: function() {
      this.$el.empty().append(this.template());
      this.$el.attr('tabindex', 0);
      this.selectItem();
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
            let anchor = this.$('[href=' + this.defaultView + ']');
            if (evt) {
                evt.preventDefault();
                anchor = $(evt.currentTarget);
            }
            anchor.addClass('selected').siblings().removeClass('selected');
            this.trigger('select', anchor.attr('href'));
        }
      }

      BDT.page.eval('isDebugMode', [], _.bind(callback, this));
    },
  });
})();
