console.info('init jenkins');

const css = `
.bigtable tr:hover {
    background: #ccc!important;
}

.bigtable td:nth-child(3n+1),
.bigtable td:nth-child(4n+1) {
    max-width: 150px;
}
`;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading' && tab.url.match('til0elsa-build-app01:8080')) {
        console.info('jenkins loading');

        chrome.tabs.insertCSS(tabId, { code: css }, () => {
            console.log('jenkins css applied');
        });
    }
});
