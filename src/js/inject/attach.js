/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */
(function() {

  var htmlTag = document.documentElement;

  var baseUrl = htmlTag.getAttribute('sdt-path');

  // a simple security check
  if (!/^chrome-extension:\/\/\w+\/js\/inject\/$/.test(baseUrl)) {
    console.error('[Sidecar Dev Tools] Incorrect extension URL');
    return;
  }

  var injectScript = function(url, callback) {
    // don't use $.ajax to avoid any prefilters adding headers
    var request = new XMLHttpRequest();
    request.open('GET', baseUrl + url, false);
    request.send();
    eval(request.responseText);
    if (callback) callback();
  };

  var timer;

  var inject = function() {
    var timeout;
    if (!window.SUGAR) {
      timeout = parseInt(window.sessionStorage['_sidecar_debug_injection_timeout'], 10) || 500;
      // Instead of logging an error immediately, we do the following:
      // (1) Add a listener on `DOMNodeInserted` (which is triggered by require.js)
      // (2) Set a timer for 500ms to log the error
      // Then, an each `DOMNodeInserted` event, we check for window.SUGAR.
      // If found, we clear the error log timer, remove the `DOMNodeInserted`
      // listener, and inject sidecar.debug.js.
      document.addEventListener('DOMNodeInserted', tryInject);
      timer = setTimeout(function () {
        document.removeEventListener('DOMNodeInserted', tryInject);
        console.error('[Sidecar Dev Tools] The current app is not SugarCRM');
      }, timeout);
      return;
    }

      injectScript("sidecar.debug.js", function() {
          console.log('[Sidecar Dev Tools] Injected debug scripts.');
      });
  };

  var tryInject = function () {
    if (window.Backbone) {
      clearTimeout(timer);
      document.removeEventListener('DOMNodeInserted', tryInject);
      inject();
    }
  };

  if (window.sessionStorage['_sidecar_debug_injection'] === 'enabled') {
    document.addEventListener('DOMContentLoaded', inject);
  }

  if (window.sessionStorage['_sidecar_debug_polygons'] === 'enabled') {
    (function() {
      var style = document.createElement("style");

      // Add a media (and/or media query) here if you'd like!
      // style.setAttribute("media", "screen")
      // style.setAttribute("media", "only screen and (max-width : 1024px)")

      // WebKit hack :(
      style.appendChild(document.createTextNode(".polygonHoverView {border: 1px solid #FF0000 !important;}"));
      style.appendChild(document.createTextNode(".polygonHoverField {border: 1px solid #33800D !important;}"));

      // Add the <style> element to the page
      document.head.appendChild(style);
    })();
  }
})();
