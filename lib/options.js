console.info('show options');

import defaultOptions from './defaultOptions';

const jenkinsUrlsInput = document.getElementById('jenkinsUrls');
const jenkinsCssInput = document.getElementById('jenkinsCss');

const actions = document.getElementById('actions');
const defaultsButton = document.getElementById('defaults');
const cancelButton = document.getElementById('cancel');
const saveButton = document.getElementById('save');

const savedMessage = document.getElementById('savedMessage');

function hideElement(element) {
    element.style.display = 'none';
}

function showElement(element) {
    element.style.display = null;
}

function viewOptions(options) {
    jenkinsUrlsInput.value = options.jenkinsUrls.join('\n');
    jenkinsCssInput.value = options.jenkinsCss.trim();
}

function loadOptions() {
    chrome.storage.sync.get(defaultOptions, (options) => viewOptions(options));

    showElement(actions);
}

function saveOptions() {
    const options = {
        jenkinsCss: jenkinsCssInput.value,
        jenkinsUrls: jenkinsUrlsInput.value.split('\n').map(url => url.trim())
    };

    console.info('saving options', options);

    chrome.storage.sync.set(Object.assign({}, defaultOptions, options), () => {
        console.info('options saved');

        showElement(savedMessage);
    });
}

function closeTab() {
    chrome.tabs.query({
        active: true,
        highlighted: true,
        currentWindow: true,
        url: 'chrome://extensions/*'
    }, (activeTabs) => {
        chrome.tabs.remove(activeTabs[0].id, () => {
            console.info('tab closed');
        });
    });
}

defaultsButton.addEventListener('click', () => {
    console.info('click defaults');

    hideElement(savedMessage);
    viewOptions(defaultOptions);
});

cancelButton.addEventListener('click', () => {
    console.info('click cancel');

    closeTab();
    hideElement(savedMessage);
    loadOptions();
});

saveButton.addEventListener('click', () => {
    console.info('click save');

    saveOptions();
});

loadOptions();