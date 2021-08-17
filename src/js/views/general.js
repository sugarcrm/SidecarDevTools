/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {

  var BDT = window.BDT;

  BDT.views.General = Backbone.View.extend({

    className: 'general',
    template: BDT.templates['general'],

    events: {
      'click ul[data-menu]': 'selectItem',
      'change [name="tooltips"]': 'toggleTooltips',
      'change [name="timeout"]': 'updateTimeout'
    },

    render: function() {
      this.$el.empty().append(this.template());

      BDT.page.eval('areTooltipsEnabled', [], function(enabled) {
        $('[name="tooltips"]').prop('checked', enabled);
      });
      return this;
    },

    toggleTooltips: function(evt) {
      var on = (this.$(evt.currentTarget).is(':checked'));

      BDT.page.eval(
          on ? 'enableTooltips' : 'disableTooltips',
          [],
          function() {
            chrome.devtools.inspectedWindow.reload();
          }
      );
    },

    updateTimeout: function (evt) {
      var seconds = parseFloat(this.$(evt.currentTarget).val());
      var ms = Math.round(seconds * 1000);
      BDT.page.eval('updateTimeout', [ms]);
    },

    selectItem: function(evt) {
      var itemId = $(evt.currentTarget).data('menu');
      $('nav a[href=' + itemId + ']').click();
    }

  });

})();
