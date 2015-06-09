(function() {

    var BDT = window.BDT;

    BDT.sidebarPane.create();
    BDT.panel.create();

    chrome.devtools.panels.elements.onSelectionChanged.addListener(
        function() {
            BDT.page.eval('set$view');
            chrome.devtools.inspectedWindow.eval("setSelectedElement($0)",
                { useContentScriptContext: true });
        }
    );

})();
