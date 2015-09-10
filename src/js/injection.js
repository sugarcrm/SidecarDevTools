/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */
(function() {

  var BDT = window.BDT;

  BDT.injection = {

    enable: function() {
      chrome.devtools.inspectedWindow.reload(
        true, null, "(function(){ console.log(window.Backbone); })()"
      );
    },

    disable: function() {
      chrome.devtools.inspectedWindow.reload();
    }

  };

})();
