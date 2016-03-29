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

defaultsButton.addEventListener('click', function () {
    console.info('click defaults');

    hideElement(savedMessage);
    viewOptions(_defaultOptions2.default);
});

cancelButton.addEventListener('click', function () {
    console.info('click cancel');

    hideElement(savedMessage);
    loadOptions();
});

saveButton.addEventListener('click', function () {
    console.info('click save');

    saveOptions();
});

loadOptions();

},{"./defaultOptions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZGVmYXVsdE9wdGlvbnMuanMiLCJsaWIvb3B0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsSUFBTSxzS0FBTjs7a0JBV2U7QUFDWCwwQkFEVztBQUVYLGlCQUFhLENBQUMsMkJBQUQsQ0FBYjs7Ozs7O0FDWEo7Ozs7OztBQUZBLFFBQVEsSUFBUixDQUFhLGNBQWI7O0FBSUEsSUFBTSxtQkFBbUIsU0FBUyxjQUFULENBQXdCLGFBQXhCLENBQW5CO0FBQ04sSUFBTSxrQkFBa0IsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQWxCOztBQUVOLElBQU0sVUFBVSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBVjtBQUNOLElBQU0saUJBQWlCLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNOLElBQU0sZUFBZSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNOLElBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjs7QUFFTixJQUFNLGVBQWUsU0FBUyxjQUFULENBQXdCLGNBQXhCLENBQWY7O0FBRU4sU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLFlBQVEsS0FBUixDQUFjLE9BQWQsR0FBd0IsTUFBeEIsQ0FEMEI7Q0FBOUI7O0FBSUEsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLFlBQVEsS0FBUixDQUFjLE9BQWQsR0FBd0IsSUFBeEIsQ0FEMEI7Q0FBOUI7O0FBSUEsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLHFCQUFpQixLQUFqQixHQUF5QixRQUFRLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBekIsQ0FEMEI7QUFFMUIsb0JBQWdCLEtBQWhCLEdBQXdCLFFBQVEsVUFBUixDQUFtQixJQUFuQixFQUF4QixDQUYwQjtDQUE5Qjs7QUFLQSxTQUFTLFdBQVQsR0FBdUI7QUFDbkIsV0FBTyxPQUFQLENBQWUsSUFBZixDQUFvQixHQUFwQiwyQkFBd0MsVUFBQyxPQUFEO2VBQWEsWUFBWSxPQUFaO0tBQWIsQ0FBeEMsQ0FEbUI7O0FBR25CLGdCQUFZLE9BQVosRUFIbUI7Q0FBdkI7O0FBTUEsU0FBUyxXQUFULEdBQXVCO0FBQ25CLFFBQU0sVUFBVTtBQUNaLG9CQUFZLGdCQUFnQixLQUFoQjtBQUNaLHFCQUFhLGlCQUFpQixLQUFqQixDQUF1QixLQUF2QixDQUE2QixJQUE3QixFQUFtQyxHQUFuQyxDQUF1QzttQkFBTyxJQUFJLElBQUo7U0FBUCxDQUFwRDtLQUZFLENBRGE7O0FBTW5CLFlBQVEsSUFBUixDQUFhLGdCQUFiLEVBQStCLE9BQS9CLEVBTm1COztBQVFuQixXQUFPLE9BQVAsQ0FBZSxJQUFmLENBQW9CLEdBQXBCLENBQXdCLE9BQU8sTUFBUCxDQUFjLEVBQWQsNEJBQWtDLE9BQWxDLENBQXhCLEVBQW9FLFlBQU07QUFDdEUsZ0JBQVEsSUFBUixDQUFhLGVBQWIsRUFEc0U7O0FBR3RFLG9CQUFZLFlBQVosRUFIc0U7S0FBTixDQUFwRSxDQVJtQjtDQUF2Qjs7QUFlQSxlQUFlLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07QUFDM0MsWUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFEMkM7O0FBRzNDLGdCQUFZLFlBQVosRUFIMkM7QUFJM0MsMENBSjJDO0NBQU4sQ0FBekM7O0FBT0EsYUFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQ3pDLFlBQVEsSUFBUixDQUFhLGNBQWIsRUFEeUM7O0FBR3pDLGdCQUFZLFlBQVosRUFIeUM7QUFJekMsa0JBSnlDO0NBQU4sQ0FBdkM7O0FBT0EsV0FBVyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3ZDLFlBQVEsSUFBUixDQUFhLFlBQWIsRUFEdUM7O0FBR3ZDLGtCQUh1QztDQUFOLENBQXJDOztBQU1BIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGplbmtpbnNDc3MgPSBgXG4uYmlndGFibGUgdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNjY2MhaW1wb3J0YW50O1xufVxuXG4uYmlndGFibGUgdGQ6bnRoLWNoaWxkKDNuKzEpLFxuLmJpZ3RhYmxlIHRkOm50aC1jaGlsZCg0bisxKSB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBqZW5raW5zQ3NzLFxuICAgIGplbmtpbnNVcmxzOiBbJ3RpbDBlbHNhLWJ1aWxkLWFwcDAxOjgwODAnXVxufTsiLCJjb25zb2xlLmluZm8oJ3Nob3cgb3B0aW9ucycpO1xuXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSAnLi9kZWZhdWx0T3B0aW9ucyc7XG5cbmNvbnN0IGplbmtpbnNVcmxzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnamVua2luc1VybHMnKTtcbmNvbnN0IGplbmtpbnNDc3NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqZW5raW5zQ3NzJyk7XG5cbmNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9ucycpO1xuY29uc3QgZGVmYXVsdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmYXVsdHMnKTtcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwnKTtcbmNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZScpO1xuXG5jb25zdCBzYXZlZE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZWRNZXNzYWdlJyk7XG5cbmZ1bmN0aW9uIGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHNob3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xufVxuXG5mdW5jdGlvbiB2aWV3T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgamVua2luc1VybHNJbnB1dC52YWx1ZSA9IG9wdGlvbnMuamVua2luc1VybHMuam9pbignXFxuJyk7XG4gICAgamVua2luc0Nzc0lucHV0LnZhbHVlID0gb3B0aW9ucy5qZW5raW5zQ3NzLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gbG9hZE9wdGlvbnMoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoZGVmYXVsdE9wdGlvbnMsIChvcHRpb25zKSA9PiB2aWV3T3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgICBzaG93RWxlbWVudChhY3Rpb25zKTtcbn1cblxuZnVuY3Rpb24gc2F2ZU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgamVua2luc0NzczogamVua2luc0Nzc0lucHV0LnZhbHVlLFxuICAgICAgICBqZW5raW5zVXJsczogamVua2luc1VybHNJbnB1dC52YWx1ZS5zcGxpdCgnXFxuJykubWFwKHVybCA9PiB1cmwudHJpbSgpKVxuICAgIH07XG5cbiAgICBjb25zb2xlLmluZm8oJ3NhdmluZyBvcHRpb25zJywgb3B0aW9ucyk7XG5cbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyksICgpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdvcHRpb25zIHNhdmVkJyk7XG5cbiAgICAgICAgc2hvd0VsZW1lbnQoc2F2ZWRNZXNzYWdlKTtcbiAgICB9KTtcbn1cblxuZGVmYXVsdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdjbGljayBkZWZhdWx0cycpO1xuXG4gICAgaGlkZUVsZW1lbnQoc2F2ZWRNZXNzYWdlKTtcbiAgICB2aWV3T3B0aW9ucyhkZWZhdWx0T3B0aW9ucyk7XG59KTtcblxuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnY2xpY2sgY2FuY2VsJyk7XG5cbiAgICBoaWRlRWxlbWVudChzYXZlZE1lc3NhZ2UpO1xuICAgIGxvYWRPcHRpb25zKCk7XG59KTtcblxuc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmluZm8oJ2NsaWNrIHNhdmUnKTtcblxuICAgIHNhdmVPcHRpb25zKCk7XG59KTtcblxubG9hZE9wdGlvbnMoKTsiXX0=
