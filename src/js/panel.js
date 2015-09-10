/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */
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
