"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteQLContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteQLContext = exports.RouteQLContext = _react2.default.createContext({});

var Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        RouteQLContext.Provider,
        { value: this.props.config },
        this.props.children
      );
    }
  }]);

  return Provider;
}(_react2.default.Component);

Provider.propTypes = {
  config: _propTypes2.default.shape({
    defaultEndpoint: _propTypes2.default.string,
    defaultResolver: _propTypes2.default.object,
    headers: _propTypes2.default.object,
    fetch: _propTypes2.default.func,
    fetchOptions: _propTypes2.default.object,
    credentials: _propTypes2.default.string,
    cachePolicy: _propTypes2.default.string
  }).isRequired,
  children: _propTypes2.default.node.isRequired
};
exports.default = Provider;