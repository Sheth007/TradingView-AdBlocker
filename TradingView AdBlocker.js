// ==UserScript==
// @name         Trading View AdBlocker
// @namespace    http://tampermonkey.net/
// @version      2025-04-29
// @description  Hides ads on TradingView charts dynamically
// @author       Uday Sheth (Github : Sheth007)
// @match        https://in.tradingview.com/chart/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tradingview.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    alert('AdBlock activated');

    const hideAds = () => {
        const ids = [
            "toastGroup-JUpQSPBo",
            "itemInnerInner-JUpQSPBo",
            "charting-ad"
        ];

        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = "none";
            }
        });
    };

    // Initial call
    hideAds();

    // Observe DOM changes to hide ads dynamically
    const observer = new MutationObserver(() => {
        hideAds();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
