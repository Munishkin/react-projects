webpackHotUpdate(0,{

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Colors = __webpack_require__(196);

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.state = {
      text: '',
      color: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleColor = _this.handleColor.bind(_this);
    return _this;
  }

  _createClass(TextField, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        text: e.target.value
      });
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      this.props.onSave(this.state.text, this.state.color);
      this.setState({
        text: '',
        color: ''
      });
    }
  }, {
    key: 'handleColor',
    value: function handleColor(code) {
      this.setState(_extends({
        color: code
      }, this.state));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'editor' },
        _react2.default.createElement('textarea', {
          className: 'textArea',
          rows: 5,
          placeholder: 'Please enter your note here',
          onChange: this.handleChange,
          value: this.state.text
        }),
        _react2.default.createElement(_Colors2.default, { onSelect: this.handleColor }),
        _react2.default.createElement(
          'button',
          { className: 'editor_button', onClick: this.handleSave },
          'Save'
        )
      );
    }
  }]);

  return TextField;
}(_react.Component);

exports.default = TextField;

/***/ })

})
//# sourceMappingURL=0.a1727120267a1a1da111.hot-update.js.map