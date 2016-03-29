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
    jenkinsCssInput.value = options.jenkinsCss.trim();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZGVmYXVsdE9wdGlvbnMuanMiLCJsaWIvb3B0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsSUFBTSxzS0FBTjs7a0JBV2U7QUFDWCwwQkFEVztBQUVYLGlCQUFhLENBQUMsMkJBQUQsQ0FBYjs7Ozs7O0FDWEo7Ozs7OztBQUZBLFFBQVEsSUFBUixDQUFhLGNBQWI7O0FBSUEsSUFBTSxtQkFBbUIsU0FBUyxjQUFULENBQXdCLGFBQXhCLENBQW5CO0FBQ04sSUFBTSxrQkFBa0IsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQWxCOztBQUVOLElBQU0sVUFBVSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBVjtBQUNOLElBQU0saUJBQWlCLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNOLElBQU0sZUFBZSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNOLElBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjs7QUFFTixJQUFNLGVBQWUsU0FBUyxjQUFULENBQXdCLGNBQXhCLENBQWY7O0FBRU4sU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLFlBQVEsS0FBUixDQUFjLE9BQWQsR0FBd0IsTUFBeEIsQ0FEMEI7Q0FBOUI7O0FBSUEsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLFlBQVEsS0FBUixDQUFjLE9BQWQsR0FBd0IsSUFBeEIsQ0FEMEI7Q0FBOUI7O0FBSUEsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLHFCQUFpQixLQUFqQixHQUF5QixRQUFRLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBekIsQ0FEMEI7QUFFMUIsb0JBQWdCLEtBQWhCLEdBQXdCLFFBQVEsVUFBUixDQUFtQixJQUFuQixFQUF4QixDQUYwQjtDQUE5Qjs7QUFLQSxTQUFTLFdBQVQsR0FBdUI7QUFDbkIsV0FBTyxPQUFQLENBQWUsSUFBZixDQUFvQixHQUFwQiwyQkFBd0MsVUFBQyxPQUFEO2VBQWEsWUFBWSxPQUFaO0tBQWIsQ0FBeEMsQ0FEbUI7O0FBR25CLGdCQUFZLE9BQVosRUFIbUI7Q0FBdkI7O0FBTUEsU0FBUyxXQUFULEdBQXVCO0FBQ25CLFFBQU0sVUFBVTtBQUNaLG9CQUFZLGdCQUFnQixLQUFoQjtBQUNaLHFCQUFhLGlCQUFpQixLQUFqQixDQUF1QixLQUF2QixDQUE2QixJQUE3QixFQUFtQyxHQUFuQyxDQUF1QzttQkFBTyxJQUFJLElBQUo7U0FBUCxDQUFwRDtLQUZFLENBRGE7O0FBTW5CLFlBQVEsSUFBUixDQUFhLGdCQUFiLEVBQStCLE9BQS9CLEVBTm1COztBQVFuQixXQUFPLE9BQVAsQ0FBZSxJQUFmLENBQW9CLEdBQXBCLENBQXdCLE9BQU8sTUFBUCxDQUFjLEVBQWQsNEJBQWtDLE9BQWxDLENBQXhCLEVBQW9FLFlBQU07QUFDdEUsZ0JBQVEsSUFBUixDQUFhLGVBQWIsRUFEc0U7O0FBR3RFLG9CQUFZLFlBQVosRUFIc0U7S0FBTixDQUFwRSxDQVJtQjtDQUF2Qjs7QUFlQSxTQUFTLFFBQVQsR0FBb0I7QUFDaEIsV0FBTyxJQUFQLENBQVksS0FBWixDQUFrQjtBQUNkLGdCQUFRLElBQVI7QUFDQSxxQkFBYSxJQUFiO0FBQ0EsdUJBQWUsSUFBZjtBQUNBLGFBQUssdUJBQUw7S0FKSixFQUtHLFVBQUMsVUFBRCxFQUFnQjtBQUNmLGVBQU8sSUFBUCxDQUFZLE1BQVosQ0FBbUIsV0FBVyxDQUFYLEVBQWMsRUFBZCxFQUFrQixZQUFNO0FBQ3ZDLG9CQUFRLElBQVIsQ0FBYSxZQUFiLEVBRHVDO1NBQU4sQ0FBckMsQ0FEZTtLQUFoQixDQUxILENBRGdCO0NBQXBCOztBQWFBLGVBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBTTtBQUMzQyxZQUFRLElBQVIsQ0FBYSxnQkFBYixFQUQyQzs7QUFHM0MsZ0JBQVksWUFBWixFQUgyQztBQUkzQywwQ0FKMkM7Q0FBTixDQUF6Qzs7QUFPQSxhQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDekMsWUFBUSxJQUFSLENBQWEsY0FBYixFQUR5Qzs7QUFHekMsZUFIeUM7QUFJekMsZ0JBQVksWUFBWixFQUp5QztBQUt6QyxrQkFMeUM7Q0FBTixDQUF2Qzs7QUFRQSxXQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07QUFDdkMsWUFBUSxJQUFSLENBQWEsWUFBYixFQUR1Qzs7QUFHdkMsa0JBSHVDO0NBQU4sQ0FBckM7O0FBTUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgamVua2luc0NzcyA9IGBcbi5iaWd0YWJsZSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2NjYyFpbXBvcnRhbnQ7XG59XG5cbi5iaWd0YWJsZSB0ZDpudGgtY2hpbGQoM24rMSksXG4uYmlndGFibGUgdGQ6bnRoLWNoaWxkKDRuKzEpIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGplbmtpbnNDc3MsXG4gICAgamVua2luc1VybHM6IFsndGlsMGVsc2EtYnVpbGQtYXBwMDE6ODA4MCddXG59OyIsImNvbnNvbGUuaW5mbygnc2hvdyBvcHRpb25zJyk7XG5cbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tICcuL2RlZmF1bHRPcHRpb25zJztcblxuY29uc3QgamVua2luc1VybHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqZW5raW5zVXJscycpO1xuY29uc3QgamVua2luc0Nzc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2plbmtpbnNDc3MnKTtcblxuY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb25zJyk7XG5jb25zdCBkZWZhdWx0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZhdWx0cycpO1xuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xuY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlJyk7XG5cbmNvbnN0IHNhdmVkTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlZE1lc3NhZ2UnKTtcblxuZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHZpZXdPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBqZW5raW5zVXJsc0lucHV0LnZhbHVlID0gb3B0aW9ucy5qZW5raW5zVXJscy5qb2luKCdcXG4nKTtcbiAgICBqZW5raW5zQ3NzSW5wdXQudmFsdWUgPSBvcHRpb25zLmplbmtpbnNDc3MudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBsb2FkT3B0aW9ucygpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChkZWZhdWx0T3B0aW9ucywgKG9wdGlvbnMpID0+IHZpZXdPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIHNob3dFbGVtZW50KGFjdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBzYXZlT3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBqZW5raW5zQ3NzOiBqZW5raW5zQ3NzSW5wdXQudmFsdWUsXG4gICAgICAgIGplbmtpbnNVcmxzOiBqZW5raW5zVXJsc0lucHV0LnZhbHVlLnNwbGl0KCdcXG4nKS5tYXAodXJsID0+IHVybC50cmltKCkpXG4gICAgfTtcblxuICAgIGNvbnNvbGUuaW5mbygnc2F2aW5nIG9wdGlvbnMnLCBvcHRpb25zKTtcblxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oJ29wdGlvbnMgc2F2ZWQnKTtcblxuICAgICAgICBzaG93RWxlbWVudChzYXZlZE1lc3NhZ2UpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRhYigpIHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgaGlnaGxpZ2h0ZWQ6IHRydWUsXG4gICAgICAgIGN1cnJlbnRXaW5kb3c6IHRydWUsXG4gICAgICAgIHVybDogJ2Nocm9tZTovL2V4dGVuc2lvbnMvKidcbiAgICB9LCAoYWN0aXZlVGFicykgPT4ge1xuICAgICAgICBjaHJvbWUudGFicy5yZW1vdmUoYWN0aXZlVGFic1swXS5pZCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCd0YWIgY2xvc2VkJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5kZWZhdWx0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmluZm8oJ2NsaWNrIGRlZmF1bHRzJyk7XG5cbiAgICBoaWRlRWxlbWVudChzYXZlZE1lc3NhZ2UpO1xuICAgIHZpZXdPcHRpb25zKGRlZmF1bHRPcHRpb25zKTtcbn0pO1xuXG5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdjbGljayBjYW5jZWwnKTtcblxuICAgIGNsb3NlVGFiKCk7XG4gICAgaGlkZUVsZW1lbnQoc2F2ZWRNZXNzYWdlKTtcbiAgICBsb2FkT3B0aW9ucygpO1xufSk7XG5cbnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdjbGljayBzYXZlJyk7XG5cbiAgICBzYXZlT3B0aW9ucygpO1xufSk7XG5cbmxvYWRPcHRpb25zKCk7Il19
