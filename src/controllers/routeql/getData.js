"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = getData;

var _parser = require("graphql/language/parser");

var _fetchDedupe = require("fetch-dedupe");

function getDefaultRequestData(field) {
  return { params: [field], queryParams: {} };
}

function getParamString(params) {
  return params.reduce(function (acc, param) {
    return acc + "/" + param;
  }, "");
}

function getQueryString(queryParams) {
  return Object.entries(queryParams).reduce(function (qs, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return "" + qs + (qs.length === 1 ? "" : "&") + key + "=" + value;
  }, "?");
}

function pickSelectionsFromData(_ref3) {
  var data = _ref3.data,
      selections = _ref3.selections;

  return selections.reduce(function (queriedData, selection) {
    var field = selection.name.value;
    if (selection.selectionSet) {
      queriedData[field] = pickSelectionsFromData({
        data: data[field] || {},
        selections: selection.selectionSet.selections
      });
    } else {
      queriedData[field] = data[field] === undefined ? null : data[field];
    }
    return queriedData;
  }, {});
}

function getData(_ref4) {
  var _ref4$config = _ref4.config,
      config = _ref4$config === undefined ? {} : _ref4$config,
      _ref4$query = _ref4.query,
      query = _ref4$query === undefined ? "" : _ref4$query,
      _ref4$requestDataForF = _ref4.requestDataForField,
      requestDataForField = _ref4$requestDataForF === undefined ? {} : _ref4$requestDataForF,
      _ref4$resolver = _ref4.resolver,
      resolver = _ref4$resolver === undefined ? config.defaultResolver || {} : _ref4$resolver,
      _ref4$endpoint = _ref4.endpoint,
      endpoint = _ref4$endpoint === undefined ? config.defaultEndpoint || "" : _ref4$endpoint,
      props = _ref4.props,
      _ref4$cachePolicy = _ref4.cachePolicy,
      cachePolicy = _ref4$cachePolicy === undefined ? "cache-first" : _ref4$cachePolicy;

  var ast = typeof query === "string" ? (0, _parser.parse)(query) : query;
  if (ast.definitions.length !== 1) {
    throw new Error("RouteQL currently only supports one query at a time, split up calls to Query or the routeql HOC or request data in one query");
  }
  var def = ast.definitions[0];
  var selections = def.selectionSet.selections;
  return selections.reduce(function (_ref5, route) {
    var requests = _ref5.requests,
        deferredRequests = _ref5.deferredRequests,
        deferredRequestInitialValues = _ref5.deferredRequestInitialValues;

    var field = route.name.value;
    var selections = route.selectionSet.selections;

    var _ref6 = (requestDataForField[field] || function () {
      return getDefaultRequestData(field);
    })({
      field: field,
      selections: selections,
      props: props
    }),
        _ref6$method = _ref6.method,
        method = _ref6$method === undefined ? def.operation === "query" ? "GET" : "POST" : _ref6$method,
        _ref6$params = _ref6.params,
        params = _ref6$params === undefined ? {} : _ref6$params,
        _ref6$queryParams = _ref6.queryParams,
        queryParams = _ref6$queryParams === undefined ? {} : _ref6$queryParams,
        body = _ref6.body;

    var paramString = getParamString(params);
    var queryString = getQueryString(queryParams);
    var isDeferred = route.directives && route.directives.some(function (directive) {
      return directive.name.value === "defer";
    });
    var request = (config.fetch || _fetchDedupe.fetchDedupe)("" + endpoint + paramString + queryString, Object.assign({ method: method, body: body ? JSON.stringify(body) : undefined }, config.fetchOptions || {}), {
      cachePolicy: cachePolicy
    }).then(function (res) {
      return resolver[field] ? resolver[field]({ data: res.data }) : res.data;
    }).then(function (data) {
      return {
        key: field,
        data: Array.isArray(data) ? data.map(function (item) {
          return pickSelectionsFromData({ data: item, selections: selections });
        }) : pickSelectionsFromData({ data: data, selections: selections })
      };
    });
    if (isDeferred) {
      deferredRequests.push(request);
      deferredRequestInitialValues[field] = null;
    } else {
      requests.push(request);
    }
    return { requests: requests, deferredRequests: deferredRequests, deferredRequestInitialValues: deferredRequestInitialValues };
  }, { requests: [], deferredRequests: [], deferredRequestInitialValues: {} });
}