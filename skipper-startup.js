setTimeout(() => {
    document.mutationObserver = new MutationObserver(function (mutationsList, observer) {
        var adText = document.querySelector("[id^='ad-preview'] > span > div");
        var vid = document.querySelector("#movie_player > div.html5-video-container > video");
        if (adText) {
            vid.currentTime = vid.duration;
            return;
        }
        for (var mutation of mutationsList) {
            if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                document.querySelectorAll('#ytd-player [id^=invideo-overlay] > div > div.ytp-ad-image-overlay > div.ytp-ad-overlay-close-container > button').forEach((someElement) => {
                    var event = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
                    someElement.dispatchEvent(event);
                });
                document.querySelectorAll('#movie_player > div.video-ads.ytp-ad-module > div > div.ytp-ad-player-overlay-skip-or-preview > div > div.ytp-ad-skip-button-slot > span > button').forEach((someElement) => {
                    var event = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
                    someElement.dispatchEvent(event);
                });
                document.querySelectorAll('div[id^=invideo-overlay] > div > div.ytp-ad-image-overlay > div.ytp-ad-overlay-close-container > button').forEach((someElement) => {
                    var event = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
                    someElement.dispatchEvent(event);
                });
                document.querySelectorAll('#ytd-player [id^=skip-button] > span > button').forEach((someElement) => {
                    var event = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
                    someElement.dispatchEvent(event);
                });
            }
        }
    });
    console.log(document.mutationObserver);
    function addObserverIfDesiredNodeAvailable() {
        const ytdPlayer = document.getElementById('ytd-player');
        while(!ytdPlayer) {
            window.setTimeout(addObserverIfDesiredNodeAvailable,50);
            return;
        }
        document.mutationObserver.observe(ytdPlayer, { attributes: false, childList: true, subtree: true });
    }
    addObserverIfDesiredNodeAvailable();
}, 500);