//Handle request from devtools
chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(message) {
        chrome.tabs.sendMessage(message.tabId, message);
    });
    //Posting back to Devtools
    chrome.extension.onMessage.addListener(function (message, sender) {
        port.postMessage(message);
    });
});
