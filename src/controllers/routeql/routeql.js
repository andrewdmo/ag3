"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = routeql;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _parser = require("graphql/language/parser");

var _getData2 = require("./getData");

var _getData3 = _interopRequireDefault(_getData2);

var _Provider = require("./Provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function routeql(query, _ref) {
  var endpoint = _ref.endpoint,
      requestDataForField = _ref.requestDataForField,
      resolver = _ref.resolver,
      pollInterval = _ref.pollInterval,
      cachePolicy = _ref.cachePolicy,
      name = _ref.name;

  var ast = typeof query === "string" ? (0, _parser.parse)(query) : query;
  var isMutation = ast.definitions[0] && ast.definitions[0].operation === "mutation";
  var dataKey = name || "data";
  return function (WrappedComponent) {
    var RouteQL = function (_React$Component) {
      _inherits(RouteQL, _React$Component);

      function RouteQL() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, RouteQL);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = RouteQL.__proto__ || Object.getPrototypeOf(RouteQL)).call.apply(_ref2, [this].concat(args))), _this), _this.state = _defineProperty({}, dataKey, { loading: true }), _this.fetchData = function (getDataArgs) {
          var dataKey = _this.props.name || "data";

          var _getData = (0, _getData3.default)(getDataArgs),
              requests = _getData.requests,
              deferredRequests = _getData.deferredRequests,
              deferredRequestInitialValues = _getData.deferredRequestInitialValues;

          deferredRequests.forEach(function (request) {
            return request.then(function (_ref3) {
              var key = _ref3.key,
                  data = _ref3.data;

              _this.setState(_defineProperty({}, dataKey, Object.assign({}, _this.state[dataKey], _defineProperty({}, key, data))));
            });
          });
          return Promise.all(requests).then(function (responses) {
            var data = responses.reduce(function (allData, _ref4) {
              var key = _ref4.key,
                  data = _ref4.data;

              allData[key] = data;
              return allData;
            }, Object.entries(deferredRequestInitialValues).reduce(function (defaultDeffered, _ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  key = _ref6[0],
                  value = _ref6[1];

              if (_this.state[dataKey] && _this.state[dataKey][key] === undefined) {
                defaultDeffered[key] = value;
              }
              return defaultDeffered;
            }, {}));
            _this.setState(_defineProperty({}, dataKey, Object.assign({}, _this.state[dataKey], data)));
          });
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(RouteQL, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          var _props = this.props,
              config = _props.config,
              props = _objectWithoutProperties(_props, ["config"]);

          if (pollInterval && typeof pollInterval === "number" && !isMutation) {
            this.interval = setInterval(function () {
              return _this2.fetchData({
                query: ast,
                endpoint: endpoint,
                requestDataForField: requestDataForField,
                resolver: resolver,
                config: config,
                props: props,
                cachePolicy: "network-only"
              }).then(function (data) {
                _this2.setState(_defineProperty({}, dataKey, Object.assign({}, _this2.state[dataKey], data)));
              });
            }, pollInterval);
          }
          if (!isMutation) {
            this.fetchData({
              query: query,
              endpoint: endpoint,
              requestDataForField: requestDataForField,
              resolver: resolver,
              config: config,
              cachePolicy: cachePolicy || config.cachePolicy,
              props: this.props
            }).then(function (data) {
              return _this2.setState(_defineProperty({}, dataKey, Object.assign({}, _this2.state[dataKey], { loading: false }, data)));
            });
          }
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
              config = _props2.config,
              props = _objectWithoutProperties(_props2, ["config"]);

          var otherProps = _defineProperty({}, name && isMutation ? name : isMutation ? "mutate" : "refetch", function () {
            return _this3.fetchData({
              query: query,
              endpoint: endpoint,
              requestDataForField: requestDataForField,
              resolver: resolver,
              config: config,
              props: props,
              cachePolicy: "network-only"
            }).then(function (data) {
              if (!isMutation) {
                _this3.setState(_defineProperty({}, dataKey, Object.assign({}, _this3.state[dataKey], data)));
              }
            });
          });
          return _react2.default.createElement(WrappedComponent, _extends({}, props, this.state, otherProps));
        }
      }]);

      return RouteQL;
    }(_react2.default.Component);

    return function ConfigConsumer(props) {
      return _react2.default.createElement(
        _Provider.RouteQLContext.Consumer,
        null,
        function (config) {
          return _react2.default.createElement(RouteQL, _extends({ config: config }, props));
        }
      );
    };
  };
}