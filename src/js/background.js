/*
 * Copyright (c) 2015 SugarCRM Inc.
 */

//Handle request from devtools
chrome.extension.onConnect.addListener(function(port) {

    //Listening to the extension page.
    port.onMessage.addListener(function(message) {
        // Sending to the content script.
        chrome.tabs.sendMessage(message.tabId, message);
    });

    // Listening to the content script messages.
    chrome.runtime.onMessage.addListener(function(message,sender,sendResponse) {
        // Sending to the extension page.
        port.postMessage(message);
    });
});

