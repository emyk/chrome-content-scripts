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

var _defaultOptions = require('./defaultOptions');

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.info('show options');

var jenkinsUrlsInput = document.getElementById('jenkinsUrls');
var jenkinsCssInput = document.getElementById('jenkinsCss');

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
    jenkinsCssInput.value = options.jenkinsCss;
}

function loadOptions() {
    chrome.storage.sync.get(_defaultOptions2.default, function (options) {
        return viewOptions(options);
    });

    showElement(actions);
}

function saveOptions() {
    var options = {
        jenkinsCss: jenkinsCssInput.value,
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

},{"./defaultOptions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZGVmYXVsdE9wdGlvbnMuanMiLCJsaWIvb3B0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsSUFBTSxzS0FBTjs7a0JBV2U7QUFDWCwwQkFEVztBQUVYLGlCQUFhLENBQUMsMkJBQUQsQ0FBYjs7Ozs7O0FDWEo7Ozs7OztBQUZBLFFBQVEsSUFBUixDQUFhLGNBQWI7O0FBSUEsSUFBTSxtQkFBbUIsU0FBUyxjQUFULENBQXdCLGFBQXhCLENBQW5CO0FBQ04sSUFBTSxrQkFBa0IsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQWxCOztBQUVOLElBQU0sVUFBVSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBVjtBQUNOLElBQU0saUJBQWlCLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNOLElBQU0sZUFBZSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNOLElBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjs7QUFFTixJQUFNLGVBQWUsU0FBUyxjQUFULENBQXdCLGNBQXhCLENBQWY7O0FBRU4sU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLFlBQVEsS0FBUixDQUFjLE9BQWQsR0FBd0IsTUFBeEIsQ0FEMEI7Q0FBOUI7O0FBSUEsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLFlBQVEsS0FBUixDQUFjLE9BQWQsR0FBd0IsSUFBeEIsQ0FEMEI7Q0FBOUI7O0FBSUEsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLHFCQUFpQixLQUFqQixHQUF5QixRQUFRLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBekIsQ0FEMEI7QUFFMUIsb0JBQWdCLEtBQWhCLEdBQXdCLFFBQVEsVUFBUixDQUZFO0NBQTlCOztBQUtBLFNBQVMsV0FBVCxHQUF1QjtBQUNuQixXQUFPLE9BQVAsQ0FBZSxJQUFmLENBQW9CLEdBQXBCLDJCQUF3QyxVQUFDLE9BQUQ7ZUFBYSxZQUFZLE9BQVo7S0FBYixDQUF4QyxDQURtQjs7QUFHbkIsZ0JBQVksT0FBWixFQUhtQjtDQUF2Qjs7QUFNQSxTQUFTLFdBQVQsR0FBdUI7QUFDbkIsUUFBTSxVQUFVO0FBQ1osb0JBQVksZ0JBQWdCLEtBQWhCO0FBQ1oscUJBQWEsaUJBQWlCLEtBQWpCLENBQXVCLEtBQXZCLENBQTZCLElBQTdCLEVBQW1DLEdBQW5DLENBQXVDO21CQUFPLElBQUksSUFBSjtTQUFQLENBQXBEO0tBRkUsQ0FEYTs7QUFNbkIsWUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBK0IsT0FBL0IsRUFObUI7O0FBUW5CLFdBQU8sT0FBUCxDQUFlLElBQWYsQ0FBb0IsR0FBcEIsQ0FBd0IsT0FBTyxNQUFQLENBQWMsRUFBZCw0QkFBa0MsT0FBbEMsQ0FBeEIsRUFBb0UsWUFBTTtBQUN0RSxnQkFBUSxJQUFSLENBQWEsZUFBYixFQURzRTs7QUFHdEUsb0JBQVksWUFBWixFQUhzRTtLQUFOLENBQXBFLENBUm1CO0NBQXZCOztBQWVBLFNBQVMsUUFBVCxHQUFvQjtBQUNoQixXQUFPLElBQVAsQ0FBWSxLQUFaLENBQWtCO0FBQ2QsZ0JBQVEsSUFBUjtBQUNBLHFCQUFhLElBQWI7QUFDQSx1QkFBZSxJQUFmO0FBQ0EsYUFBSyx1QkFBTDtLQUpKLEVBS0csVUFBQyxVQUFELEVBQWdCO0FBQ2YsZUFBTyxJQUFQLENBQVksTUFBWixDQUFtQixXQUFXLENBQVgsRUFBYyxFQUFkLEVBQWtCLFlBQU07QUFDdkMsb0JBQVEsSUFBUixDQUFhLFlBQWIsRUFEdUM7U0FBTixDQUFyQyxDQURlO0tBQWhCLENBTEgsQ0FEZ0I7Q0FBcEI7O0FBYUEsZUFBZSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFNO0FBQzNDLFlBQVEsSUFBUixDQUFhLGdCQUFiLEVBRDJDOztBQUczQyxnQkFBWSxZQUFaLEVBSDJDO0FBSTNDLDBDQUoyQztDQUFOLENBQXpDOztBQU9BLGFBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUN6QyxZQUFRLElBQVIsQ0FBYSxjQUFiLEVBRHlDOztBQUd6QyxlQUh5QztBQUl6QyxnQkFBWSxZQUFaLEVBSnlDO0FBS3pDLGtCQUx5QztDQUFOLENBQXZDOztBQVFBLFdBQVcsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN2QyxZQUFRLElBQVIsQ0FBYSxZQUFiLEVBRHVDOztBQUd2QyxrQkFIdUM7Q0FBTixDQUFyQzs7QUFNQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBqZW5raW5zQ3NzID0gYFxuLmJpZ3RhYmxlIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjIWltcG9ydGFudDtcbn1cblxuLmJpZ3RhYmxlIHRkOm50aC1jaGlsZCgzbisxKSxcbi5iaWd0YWJsZSB0ZDpudGgtY2hpbGQoNG4rMSkge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgamVua2luc0NzcyxcbiAgICBqZW5raW5zVXJsczogWyd0aWwwZWxzYS1idWlsZC1hcHAwMTo4MDgwJ11cbn07IiwiY29uc29sZS5pbmZvKCdzaG93IG9wdGlvbnMnKTtcblxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gJy4vZGVmYXVsdE9wdGlvbnMnO1xuXG5jb25zdCBqZW5raW5zVXJsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2plbmtpbnNVcmxzJyk7XG5jb25zdCBqZW5raW5zQ3NzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnamVua2luc0NzcycpO1xuXG5jb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbnMnKTtcbmNvbnN0IGRlZmF1bHRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRzJyk7XG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJyk7XG5jb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUnKTtcblxuY29uc3Qgc2F2ZWRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVkTWVzc2FnZScpO1xuXG5mdW5jdGlvbiBoaWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBzaG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdmlld09wdGlvbnMob3B0aW9ucykge1xuICAgIGplbmtpbnNVcmxzSW5wdXQudmFsdWUgPSBvcHRpb25zLmplbmtpbnNVcmxzLmpvaW4oJ1xcbicpO1xuICAgIGplbmtpbnNDc3NJbnB1dC52YWx1ZSA9IG9wdGlvbnMuamVua2luc0Nzcztcbn1cblxuZnVuY3Rpb24gbG9hZE9wdGlvbnMoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoZGVmYXVsdE9wdGlvbnMsIChvcHRpb25zKSA9PiB2aWV3T3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgICBzaG93RWxlbWVudChhY3Rpb25zKTtcbn1cblxuZnVuY3Rpb24gc2F2ZU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgamVua2luc0NzczogamVua2luc0Nzc0lucHV0LnZhbHVlLFxuICAgICAgICBqZW5raW5zVXJsczogamVua2luc1VybHNJbnB1dC52YWx1ZS5zcGxpdCgnXFxuJykubWFwKHVybCA9PiB1cmwudHJpbSgpKVxuICAgIH07XG5cbiAgICBjb25zb2xlLmluZm8oJ3NhdmluZyBvcHRpb25zJywgb3B0aW9ucyk7XG5cbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyksICgpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdvcHRpb25zIHNhdmVkJyk7XG5cbiAgICAgICAgc2hvd0VsZW1lbnQoc2F2ZWRNZXNzYWdlKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VUYWIoKSB7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGhpZ2hsaWdodGVkOiB0cnVlLFxuICAgICAgICBjdXJyZW50V2luZG93OiB0cnVlLFxuICAgICAgICB1cmw6ICdjaHJvbWU6Ly9leHRlbnNpb25zLyonXG4gICAgfSwgKGFjdGl2ZVRhYnMpID0+IHtcbiAgICAgICAgY2hyb21lLnRhYnMucmVtb3ZlKGFjdGl2ZVRhYnNbMF0uaWQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygndGFiIGNsb3NlZCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZGVmYXVsdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdjbGljayBkZWZhdWx0cycpO1xuXG4gICAgaGlkZUVsZW1lbnQoc2F2ZWRNZXNzYWdlKTtcbiAgICB2aWV3T3B0aW9ucyhkZWZhdWx0T3B0aW9ucyk7XG59KTtcblxuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnY2xpY2sgY2FuY2VsJyk7XG5cbiAgICBjbG9zZVRhYigpO1xuICAgIGhpZGVFbGVtZW50KHNhdmVkTWVzc2FnZSk7XG4gICAgbG9hZE9wdGlvbnMoKTtcbn0pO1xuXG5zYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnY2xpY2sgc2F2ZScpO1xuXG4gICAgc2F2ZU9wdGlvbnMoKTtcbn0pO1xuXG5sb2FkT3B0aW9ucygpOyJdfQ==
