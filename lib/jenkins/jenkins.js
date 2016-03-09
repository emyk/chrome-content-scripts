console.info('init jenkinses');

import defaultOptions from '../defaultOptions';

const css = `
.bigtable tr:hover {
    background: #ccc!important;
}

.bigtable td:nth-child(3n+1),
.bigtable td:nth-child(4n+1) {
    max-width: 150px;
}
`;

chrome.windows.onCreated.addListener(() => {
    chrome.storage.sync.get(defaultOptions, (items) => {
        const urls = items.jenkinsUrls;

        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            console.log('lols', urls);
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
