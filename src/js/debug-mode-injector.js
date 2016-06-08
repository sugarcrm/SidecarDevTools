/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */

(function() {

  const $body = $('body');

  const scriptFiles = [
    'js/inject/sidecar.debug.js',
  ];

  for (let i = 0; i < scriptFiles.length; i++) {

    let s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = chrome.extension.getURL(scriptFiles[i]);

    $body.append(s);
  }

})();
