"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = ConfigConsumer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _getData2 = require("./getData");

var _getData3 = _interopRequireDefault(_getData2);

var _Provider = require("./Provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Query = function (_React$Component) {
  _inherits(Query, _React$Component);

  function Query(props) {
    _classCallCheck(this, Query);

    var _this = _possibleConstructorReturn(this, (Query.__proto__ || Object.getPrototypeOf(Query)).call(this, props));

    _this.fetchData = function (getDataArgs) {
      var dataKey = _this.props.name || "data";

      var _getData = (0, _getData3.default)(getDataArgs),
          requests = _getData.requests,
          deferredRequests = _getData.deferredRequests,
          deferredRequestInitialValues = _getData.deferredRequestInitialValues;

      deferredRequests.forEach(function (request) {
        return request.then(function (_ref) {
          var key = _ref.key,
              data = _ref.data;

          _this.setState(_defineProperty({}, dataKey, Object.assign({}, _this.state[dataKey], _defineProperty({}, key, data))));
        });
      });
      return Promise.all(requests).then(function (responses) {
        var data = responses.reduce(function (allData, _ref2) {
          var key = _ref2.key,
              data = _ref2.data;

          allData[key] = data;
          return allData;
        }, Object.entries(deferredRequestInitialValues).reduce(function (defaultDeffered, _ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];

          if (_this.state[dataKey] && _this.state[dataKey][key] === undefined) {
            defaultDeffered[key] = value;
          }
          return defaultDeffered;
        }, {}));
        _this.setState(_defineProperty({}, dataKey, Object.assign({}, _this.state[dataKey], data)));
      });
    };

    _this.state = _defineProperty({}, _this.props.name || "data", { loading: true });
    return _this;
  }

  _createClass(Query, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          query = _props.query,
          endpoint = _props.endpoint,
          requestDataForField = _props.requestDataForField,
          resolver = _props.resolver,
          pollInterval = _props.pollInterval,
          cachePolicy = _props.cachePolicy,
          config = _props.config,
          name = _props.name,
          props = _objectWithoutProperties(_props, ["query", "endpoint", "requestDataForField", "resolver", "pollInterval", "cachePolicy", "config", "name"]);

      var dataKey = name || "data";
      if (pollInterval && typeof pollInterval === "number") {
        this.interval = setInterval(function () {
          return _this2.fetchData({
            query: query,
            endpoint: endpoint,
            requestDataForField: requestDataForField,
            resolver: resolver,
            config: config,
            props: props,
            cachePolicy: "network-only"
          });
        }, pollInterval);
      }

      this.fetchData({
        query: query,
        endpoint: endpoint,
        requestDataForField: requestDataForField,
        resolver: resolver,
        config: config,
        cachePolicy: cachePolicy || config.cachePolicy,
        props: props
      }).then(function (data) {
        return _this2.setState(_defineProperty({}, dataKey, Object.assign({}, _this2.state[dataKey], { loading: false }, data)));
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          query = _props2.query,
          endpoint = _props2.endpoint,
          requestDataForField = _props2.requestDataForField,
          resolver = _props2.resolver,
          pollInterval = _props2.pollInterval,
          cachePolicy = _props2.cachePolicy,
          children = _props2.children,
          config = _props2.config,
          props = _objectWithoutProperties(_props2, ["query", "endpoint", "requestDataForField", "resolver", "pollInterval", "cachePolicy", "children", "config"]);

      return children(Object.assign({
        refetch: function refetch() {
          return (0, _getData3.default)({
            query: query,
            endpoint: endpoint,
            requestDataForField: requestDataForField,
            resolver: resolver,
            config: config,
            props: props,
            cachePolicy: "network-only"
          }).then(function (data) {
            // eslint-disable-next-line no-undef
            return _this3.setState(_defineProperty({}, dataKey, Object.assign({}, _this3.state[dataKey], data)));
          });
        }
      }, this.state));
    }
  }]);

  return Query;
}(_react2.default.Component);

function ConfigConsumer(props) {
  return _react2.default.createElement(
    _Provider.RouteQLContext.Consumer,
    null,
    function (config) {
      return _react2.default.createElement(Query, _extends({ config: config }, props));
    }
  );
}
