webpackHotUpdate(0,{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colors = [{
  color: 'lilac',
  code: '#F171F2'
}, {
  color: 'brown',
  code: '#FED085'
}, {
  color: 'pink',
  code: '#FE7998'
}, {
  color: 'grey',
  code: '#CED9DE'
}, {
  color: 'blue',
  code: '#86D8F9'
}, {
  color: 'orange',
  code: '#FFFD37'
}, { color: 'aqua',
  code: '#7BFEF6'
}, {
  color: 'green',
  code: '#84F47A' }];

var Colors = function (_Component) {
  _inherits(Colors, _Component);

  function Colors() {
    _classCallCheck(this, Colors);

    return _possibleConstructorReturn(this, (Colors.__proto__ || Object.getPrototypeOf(Colors)).apply(this, arguments));
  }

  _createClass(Colors, [{
    key: 'render',
    value: function render() {
      var circles = colors.map(function (color) {
        return _react2.default.createElement('span', { key: color.color, className: 'circle' });
      });
      return [].concat(_toConsumableArray(circles));
    }
  }]);

  return Colors;
}(_react.Component);

exports.default = Colors;

/***/ })

})
//# sourceMappingURL=0.7edf3cdff75b7f2c6b1e.hot-update.js.map