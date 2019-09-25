webpackHotUpdate(0,{

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(64);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TextField = __webpack_require__(76);

var _TextField2 = _interopRequireDefault(_TextField);

var _NoteGrid = __webpack_require__(77);

var _NoteGrid2 = _interopRequireDefault(_NoteGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      notes: []
    };
    _this.handleAddNode = _this.handleAddNode.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleDelete',
    value: function handleDelete(id) {
      var notes = this.state.notes.filter(function (note) {
        return note.id !== id;
      });
      this.setState({
        notes: notes
      });
    }
  }, {
    key: 'handleAddNode',
    value: function handleAddNode(text, color) {
      this.setState({
        notes: [].concat(_toConsumableArray(this.state.notes), [{ id: Date.now(), text: text, color: color }])
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var notes = JSON.parse(localStorage.getItem('notes'));
      if (notes) {
        this.setState({ notes: notes });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var notes = JSON.stringify(this.state.notes);
      if (notes) {
        localStorage.setItem('notes', notes);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.notes);
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'h1',
          { className: 'title' },
          'Munishkin Notes'
        ),
        _react2.default.createElement(_TextField2.default, { onSave: this.handleAddNode }),
        _react2.default.createElement(_NoteGrid2.default, { notes: this.state.notes, handleDeleteNote: this.handleDelete })
      );
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=0.96f215050f20e9facaca.hot-update.js.map