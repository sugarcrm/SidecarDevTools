(function() {

    var BDT = window.BDT;

    BDT.panel = {

        create: function() {
            chrome.devtools.panels.create(
                'SugarDebug', 'img/dark_cube.png', 'html/panel.html',
                function(panel) {

                }
            );
        }
    };
})();
