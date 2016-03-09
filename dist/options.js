(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    jenkinsUrls: ['til0elsa-build-app01:8080']
};

},{}],2:[function(require,module,exports){
'use strict';

var _defaultOptions = require('./defaultOptions');

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.info('show options');

var jenkinsUrlsInput = document.getElementById('jenkinsUrls');

var actions = document.getElementById('actions');
var defaultsButton = document.getElementById('defaults');
var cancelButton = document.getElementById('cancel');
var saveButton = document.getElementById('save');

var savedMessage = document.getElementById('savedMessage');

function hideElement(element) {
    element.style.display = 'none';
}

function showElement(element) {
    element.style.display = null;
}

function viewOptions(options) {
    jenkinsUrlsInput.value = options.jenkinsUrls.join('\n');
}

function loadOptions() {
    chrome.storage.sync.get(_defaultOptions2.default, function (options) {
        return viewOptions(options);
    });

    showElement(actions);
}

function saveOptions() {
    var options = {
        jenkinsUrls: jenkinsUrlsInput.value.split('\n').map(function (url) {
            return url.trim();
        })
    };

    console.info('saving options', options);

    chrome.storage.sync.set(Object.assign({}, _defaultOptions2.default, options), function () {
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
    }, function (activeTabs) {
        chrome.tabs.remove(activeTabs[0].id, function () {
            console.info('tab closed');
        });
    });
}

defaultsButton.addEventListener('click', function () {
    console.info('click defaults');

    hideElement(savedMessage);
    viewOptions(_defaultOptions2.default);
});

cancelButton.addEventListener('click', function () {
    console.info('click cancel');

    closeTab();
    hideElement(savedMessage);
    loadOptions();
});

saveButton.addEventListener('click', function () {
    console.info('click save');

    saveOptions();
});

loadOptions();

},{"./defaultOptions":1}]},{},[2]);
