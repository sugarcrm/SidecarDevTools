/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {

    // attach.js needs this url to get the other files
    var url = chrome.extension.getURL('js/inject/');
    document.documentElement.setAttribute('sdt-path', url);

    // inject attach.js which can access existing JavaScript
    var s = document.createElement('script');
    s.src = chrome.extension.getURL("js/inject/attach.js");
    s.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(s);

    //Handler request from background page
    chrome.runtime.onMessage.addListener(function(message, sender) {

        if (message.clearAllContext) {
            $('.context-overlay').remove();
            return;
        }

        var $comp = $('[data-debug-cid="' + message.cid + '"]');

        if ($comp.length === 0) {
            return;
        }
        if (message.color) {
            $comp.append('<div class="context-overlay"></div>');
            var $overlay = $comp.find('.context-overlay');
            var position = getOverlayPosition($comp);
            $overlay.css('backgroundColor', message.color);
            $overlay.css('height', position.height);
            $overlay.css('width', $comp.width());
            $overlay.css('top', position.top);
            $overlay.css('left', position.left);
        } else {
            $comp.find('.context-overlay').remove();
        }
    });

    function getOverlayPosition($comp) {
        var height = 0;
        var top = 0;
        var left = 0;
        $comp.each(function() {
            height += $(this).height();
            if (height && !top) {
                top = $(this).offset().top;
                left = $(this).offset().left;
            }
        });
        if (height === 0) {
            if ($comp.children().length > 0) {
                return getOverlayPosition($comp.children());
            }
        }
        return {height: height, top: top, left: left};
    }
})();

