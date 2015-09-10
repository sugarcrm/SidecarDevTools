/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */
(function() {

    var BDT = window.BDT;

    BDT.panel.create();

    chrome.devtools.panels.elements.onSelectionChanged.addListener(
        function() {
            BDT.page.eval('set$view');
        }
    );
})();
