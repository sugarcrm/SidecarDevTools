/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {

  var BDT = window.BDT;

  BDT.views.Panel = Backbone.View.extend({

    initialize: function() {
      this.navbar = new BDT.views.Navbar({
        el: this.$('nav')
      });
      this.listenTo(this.navbar, 'select', this.displayView);
      this.navbar.render();
    },

    viewMap: {
      '#general':     BDT.views.General,
      '#events':      BDT.views.Events,
      '#structure':   BDT.views.Structure,
      '#performance':   BDT.views.Performance,
      '#generate':   BDT.views.Generate,
      '#metrics':   BDT.views.Metrics,
      '#appstream':   BDT.views.AppStream
    },

    displayView: function(href) {
      if (this.currentView) this.currentView.remove();

      this.currentView = new this.viewMap[href]();
      var element = this.currentView.render().$el;
      this.$('#main').append(element);

      this.trigger('viewChange', this.currentView);
    }

  });

})();
