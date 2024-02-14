chrome.runtime.onInstalled.addListener(function () {
    console.log('Extension installed');
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'downloadCSV') {
        chrome.downloads.download({
            url: message.url,
            filename: 'data.csv'
        });
    }
});