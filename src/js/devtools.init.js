(function() {

    var BDT = window.BDT;

    // We currently don't use the sidebarPane so let's comment it.
//    BDT.sidebarPane.create();
    BDT.panel.create();

    chrome.devtools.panels.elements.onSelectionChanged.addListener(
        function() {
            BDT.page.eval('set$view');
        }
    );

})();
