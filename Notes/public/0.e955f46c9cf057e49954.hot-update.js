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

  function Colors(props) {
    _classCallCheck(this, Colors);

    return _possibleConstructorReturn(this, (Colors.__proto__ || Object.getPrototypeOf(Colors)).call(this, props));
  }

  _createClass(Colors, [{
    key: 'handleClick',
    value: function handleClick(code) {
      this.props.onSelect(code);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var circles = colors.map(function (color) {
        return _react2.default.createElement('span', { key: color.color, className: 'circle', style: { background: color.code }, onClick: _this2.handleClick.bind(_this2, color.code) });
      });
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        circles
      );
    }
  }]);

  return Colors;
}(_react.Component);

exports.default = Colors;

/***/ })

})
//# sourceMappingURL=0.e955f46c9cf057e49954.hot-update.js.map