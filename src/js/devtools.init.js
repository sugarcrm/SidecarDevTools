/*
 * Copyright (c) 2015 SugarCRM Inc.
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
