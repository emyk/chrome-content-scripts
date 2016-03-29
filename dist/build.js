(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var jenkinsCss = '\n.bigtable tr:hover {\n    background: #ccc!important;\n}\n\n.bigtable td:nth-child(3n+1),\n.bigtable td:nth-child(4n+1) {\n    max-width: 150px;\n}\n';

exports.default = {
    jenkinsCss: jenkinsCss,
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

chrome.windows.onCreated.addListener(function () {
    chrome.storage.sync.get(_defaultOptions2.default, function (items) {
        var urls = items.jenkinsUrls;
        var css = items.jenkinsCss;

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

},{"../defaultOptions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZGVmYXVsdE9wdGlvbnMuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvamVua2lucy9qZW5raW5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQSxJQUFNLHNLQUFOOztrQkFXZTtBQUNYLDBCQURXO0FBRVgsaUJBQWEsQ0FBQywyQkFBRCxDQUFiOzs7Ozs7QUNYSjs7QUFGQSxRQUFRLElBQVIsQ0FBYSxnQkFBYjs7Ozs7QUNFQTs7Ozs7O0FBRkEsUUFBUSxJQUFSLENBQWEsZ0JBQWI7O0FBSUEsT0FBTyxPQUFQLENBQWUsU0FBZixDQUF5QixXQUF6QixDQUFxQyxZQUFNO0FBQ3ZDLFdBQU8sT0FBUCxDQUFlLElBQWYsQ0FBb0IsR0FBcEIsMkJBQXdDLFVBQUMsS0FBRCxFQUFXO0FBQy9DLFlBQU0sT0FBTyxNQUFNLFdBQU4sQ0FEa0M7QUFFL0MsWUFBTSxNQUFNLE1BQU0sVUFBTixDQUZtQzs7QUFJL0MsZUFBTyxJQUFQLENBQVksU0FBWixDQUFzQixXQUF0QixDQUFrQyxVQUFDLEtBQUQsRUFBUSxVQUFSLEVBQW9CLEdBQXBCLEVBQTRCO0FBQzFELGdCQUFJLENBQUMsSUFBRCxJQUFTLENBQUMsS0FBSyxNQUFMLElBQWUsQ0FBQyxNQUFNLE9BQU4sQ0FBYyxJQUFkLENBQUQsRUFBc0I7QUFDL0MsdUJBRCtDO2FBQW5EOztBQUlBLGdCQUFJLFdBQVcsTUFBWCxLQUFzQixTQUF0QixJQUFtQyxLQUFLLE1BQUwsQ0FBWTt1QkFBTyxJQUFJLEdBQUosQ0FBUSxLQUFSLENBQWMsR0FBZDthQUFQLENBQVosQ0FBdUMsTUFBdkMsR0FBZ0QsQ0FBaEQsRUFBbUQ7QUFDdEYsd0JBQVEsSUFBUixDQUFhLGlCQUFiLEVBRHNGOztBQUd0Rix1QkFBTyxJQUFQLENBQVksU0FBWixDQUFzQixLQUF0QixFQUE2QixFQUFFLE1BQU0sR0FBTixFQUEvQixFQUE0QyxZQUFNO0FBQzlDLDRCQUFRLEdBQVIsQ0FBWSxxQkFBWixFQUQ4QztpQkFBTixDQUE1QyxDQUhzRjthQUExRjtTQUw4QixDQUFsQyxDQUorQztLQUFYLENBQXhDLENBRHVDO0NBQU4sQ0FBckMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgamVua2luc0NzcyA9IGBcbi5iaWd0YWJsZSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2NjYyFpbXBvcnRhbnQ7XG59XG5cbi5iaWd0YWJsZSB0ZDpudGgtY2hpbGQoM24rMSksXG4uYmlndGFibGUgdGQ6bnRoLWNoaWxkKDRuKzEpIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGplbmtpbnNDc3MsXG4gICAgamVua2luc1VybHM6IFsndGlsMGVsc2EtYnVpbGQtYXBwMDE6ODA4MCddXG59OyIsImNvbnNvbGUuaW5mbygnaW5pdCBleHRlbnNpb24nKTtcblxuaW1wb3J0ICcuL2plbmtpbnMvamVua2lucyc7XG4iLCJjb25zb2xlLmluZm8oJ2luaXQgamVua2luc2VzJyk7XG5cbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tICcuLi9kZWZhdWx0T3B0aW9ucyc7XG5cbmNocm9tZS53aW5kb3dzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoZGVmYXVsdE9wdGlvbnMsIChpdGVtcykgPT4ge1xuICAgICAgICBjb25zdCB1cmxzID0gaXRlbXMuamVua2luc1VybHM7XG4gICAgICAgIGNvbnN0IGNzcyA9IGl0ZW1zLmplbmtpbnNDc3M7XG5cbiAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXVybHMgfHwgIXVybHMubGVuZ3RoIHx8ICFBcnJheS5pc0FycmF5KHVybHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hhbmdlSW5mby5zdGF0dXMgPT09ICdsb2FkaW5nJyAmJiB1cmxzLmZpbHRlcih1cmwgPT4gdGFiLnVybC5tYXRjaCh1cmwpKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdqZW5raW5zIGxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLmluc2VydENTUyh0YWJJZCwgeyBjb2RlOiBjc3MgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnamVua2lucyBjc3MgYXBwbGllZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19
