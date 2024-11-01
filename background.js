chrome.runtime.onInstalled.addListener(function() {
    console.log("Everything is Bananas Extension installed.");
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("Message received in background script:", message);
    sendResponse({response: "Message received"});
});