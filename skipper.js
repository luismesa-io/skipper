let color = '#3aa757';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        console.log("updated");
    }
})

chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.youtube.com', schemes: ['https'] },
            css: ["#ytd-player"]
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);

    chrome.storage.local.set({ active: true });
    console.log('%cSkipper is Ready', `color: ${color}`);
});

chrome.runtime.onStartup.addListener(function () {
    console.log('open');
});