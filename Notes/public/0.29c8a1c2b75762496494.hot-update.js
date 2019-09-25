webpackHotUpdate(0,{

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Note = __webpack_require__(78);

var _Note2 = _interopRequireDefault(_Note);

var _reactMasonryComponent = __webpack_require__(79);

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = {
  columnWidth: 250,
  gutter: 10,
  isFitWidth: true
};

var NoteGrid = function (_Component) {
  _inherits(NoteGrid, _Component);

  function NoteGrid() {
    _classCallCheck(this, NoteGrid);

    return _possibleConstructorReturn(this, (NoteGrid.__proto__ || Object.getPrototypeOf(NoteGrid)).apply(this, arguments));
  }

  _createClass(NoteGrid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          notes = _props.notes,
          handleDeleteNote = _props.handleDeleteNote;

      var listOfNotes = notes.map(function (note) {
        return _react2.default.createElement(_Note2.default, { key: note.id, id: note.id, text: note.text, color: note.color, deleteNote: handleDeleteNote });
      });
      return _react2.default.createElement(
        _reactMasonryComponent2.default,
        { className: 'grid',
          options: options },
        listOfNotes
      );
    }
  }]);

  return NoteGrid;
}(_react.Component);

exports.default = NoteGrid;

/***/ })

})
//# sourceMappingURL=0.29c8a1c2b75762496494.hot-update.js.map