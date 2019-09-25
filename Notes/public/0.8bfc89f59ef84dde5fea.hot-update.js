webpackHotUpdate(0,{

/***/ 78:
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

var Note = function (_Component) {
  _inherits(Note, _Component);

  function Note(props) {
    _classCallCheck(this, Note);

    var _this = _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Note, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.deleteNote(this.props.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          color = _props.color;

      var style = color ? { backgroundColor: color } : null;
      return _react2.default.createElement(
        'div',
        { className: 'note', style: style },
        text,
        _react2.default.createElement(
          'span',
          { className: 'note_delete-icon', onClick: this.handleClick },
          'x'
        )
      );
    }
  }]);

  return Note;
}(_react.Component);

exports.default = Note;

/***/ })

})
//# sourceMappingURL=0.8bfc89f59ef84dde5fea.hot-update.js.map