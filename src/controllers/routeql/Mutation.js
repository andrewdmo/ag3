"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = ConfigConsumer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _getData2 = require("./getData");

var _getData3 = _interopRequireDefault(_getData2);

var _Provider = require("./Provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mutation = function (_React$Component) {
  _inherits(Mutation, _React$Component);

  function Mutation() {
    _classCallCheck(this, Mutation);

    return _possibleConstructorReturn(this, (Mutation.__proto__ || Object.getPrototypeOf(Mutation)).apply(this, arguments));
  }

  _createClass(Mutation, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          mutation = _props.mutation,
          endpoint = _props.endpoint,
          requestDataForField = _props.requestDataForField,
          children = _props.children,
          config = _props.config,
          props = _objectWithoutProperties(_props, ["mutation", "endpoint", "requestDataForField", "children", "config"]);

      return children(function () {
        var _getData = (0, _getData3.default)({
          query: mutation,
          endpoint: endpoint,
          requestDataForField: requestDataForField,
          config: config,
          props: props,
          cachePolicy: "network-only"
        }),
            requests = _getData.requests;

        return Promise.all(requests);
      });
    }
  }]);

  return Mutation;
}(_react2.default.Component);

function ConfigConsumer(props) {
  return _react2.default.createElement(
    _Provider.RouteQLContext.Consumer,
    null,
    function (config) {
      return _react2.default.createElement(Mutation, _extends({ config: config }, props));
    }
  );
}