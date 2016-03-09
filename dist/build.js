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

require('./jenkins/jenkins');

console.info('init extension');

},{"./jenkins/jenkins":3}],3:[function(require,module,exports){
'use strict';

var _defaultOptions = require('../defaultOptions');

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.info('init jenkinses');

var css = '\n.bigtable tr:hover {\n    background: #ccc!important;\n}\n\n.bigtable td:nth-child(3n+1),\n.bigtable td:nth-child(4n+1) {\n    max-width: 150px;\n}\n';

chrome.windows.onCreated.addListener(function () {
    chrome.storage.sync.get(_defaultOptions2.default, function (items) {
        var urls = items.jenkinsUrls;

        chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
            if (!urls || !urls.length || !Array.isArray(urls)) {
                return;
            }

            if (changeInfo.status === 'loading' && urls.filter(function (url) {
                return tab.url.match(url);
            }).length > 0) {
                console.info('jenkins loading');

                chrome.tabs.insertCSS(tabId, { code: css }, function () {
                    console.log('jenkins css applied');
                });
            }
        });
    });
});

},{"../defaultOptions":1}]},{},[2]);
