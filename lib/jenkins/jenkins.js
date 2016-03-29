console.info('init jenkinses');

import defaultOptions from '../defaultOptions';

chrome.windows.onCreated.addListener(() => {
    chrome.storage.sync.get(defaultOptions, (items) => {
        const urls = items.jenkinsUrls;
        const css = items.jenkinsCss;

        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (!urls || !urls.length || !Array.isArray(urls)) {
                return;
            }

            if (changeInfo.status === 'loading' && urls.filter(url => tab.url.match(url)).length > 0) {
                console.info('jenkins loading');

                chrome.tabs.insertCSS(tabId, { code: css }, () => {
                    console.log('jenkins css applied');
                });
            }
        });
    });
});
