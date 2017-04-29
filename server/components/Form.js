'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent2 = require('./AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_AbstractComponent) {
  _inherits(Form, _AbstractComponent);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'onChange',
    value: function onChange(e) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(e.target.name, e.target.value, e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        {
          className: this.getBlockName('form', []),
          action: this.props.action,
          method: this.props.method,
          name: this.props.name,
          target: this.props.target,
          onChange: this.onChange,
          onSubmit: this.props.onSubmit
        },
        _react2.default.createElement('input', { type: 'submit', style: { display: 'none' } }),
        this.props.children
      );
    }
  }]);

  return Form;
}(_AbstractComponent3.default);

exports.default = Form;
module.exports = exports['default'];