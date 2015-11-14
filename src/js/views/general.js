/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {

  var BDT = window.BDT;

  BDT.views.General = Backbone.View.extend({

    className: 'general',
    template: BDT.templates['general'],

    events: {
      'change [name="inject"]': 'toggleInjection',
      'change [name="tooltips"]': 'toggleTooltips',
      'change [name="polygons"]': 'togglePolygons',
      'change [name="timeout"]': 'updateTimeout'
    },

    render: function() {
      this.$el.empty().append(this.template());
      BDT.page.eval('isInjectionEnabled', [], function(enabled) {
        $('[name="inject"]').prop('checked', enabled);
        $('[name="tooltips"]')
            .prop('disabled', !enabled);

        $('[name="polygons"]')
            .prop('disabled', !enabled);

        BDT.page.eval('getTimeout', [], function(ms){
          if (ms !== undefined) {
            $('[name="timeout"]').val(ms/1000);
          }
        });

        BDT.page.eval('arePolygonsEnabled', [], function(enabled) {
          $('[name="polygons"]').prop('checked', enabled);
        });

        if (enabled) {
          $('#menu a.debugOnly')
              .removeClass('disabled');
        } else {
          $('#menu a.debugOnly')
              .addClass('disabled');
        }
      });

      BDT.page.eval('areTooltipsEnabled', [], function(enabled) {
        $('[name="tooltips"]').prop('checked', enabled);
      });
      return this;
    },

    toggleInjection: function(evt) {
      var on = (this.$(evt.currentTarget).is(':checked'));

      if (!on) {
        $('[name="tooltips"]')
            .prop('checked', false)
            .prop('disabled', true);
        $('[name="polygons"]')
            .prop('checked', false)
            .prop('disabled', true);
        $('#menu a.debugOnly')
            .addClass('disabled');
      } else {
        $('[name="tooltips"]')
            .prop('disabled', false);
        $('[name="polygons"]')
            .prop('disabled', false);
        $('#menu a.debugOnly')
            .removeClass('disabled');
      }

      BDT.page.eval(
        on ? 'enableInjection' : 'disableInjection',
        [],
        function() {
          chrome.devtools.inspectedWindow.reload();
        }
      );
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

    togglePolygons: function(evt) {
      var on = (this.$(evt.currentTarget).is(':checked'));

      BDT.page.eval(
          on ? 'enablePolygons' : 'disablePolygons',
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
    }

  });

})();
