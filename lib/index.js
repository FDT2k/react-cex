"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _compositeJs = require("@geekagency/composite-js");

/*
Easy class concat
*/
var trim = function trim(string) {
  return string.trim();
};

var assemble = (0, _compositeJs.joinList)(' ');
var resolveString = _compositeJs.identity;
var resolveObjectProp = (0, _compositeJs.curry)(function (object, prop) {
  return object[prop]() ? prop : '';
});

var resolveObject = function resolveObject(x) {
  return (0, _compositeJs.compose)(trim, assemble, (0, _compositeJs.map)(resolveObjectProp(x)), _compositeJs.keys)(x);
};

var resolveFunction = function resolveFunction(x) {
  return x();
}; // defaultResolver :: String Object => string


var defaultResolver = (0, _compositeJs.compose)((0, _compositeJs._either)(_compositeJs.is_type_function, _compositeJs.identity, resolveFunction), (0, _compositeJs._either)(_compositeJs.is_type_object, _compositeJs.identity, resolveObject), (0, _compositeJs._either)(_compositeJs.is_type_string, _compositeJs.identity, resolveString)); // MakeCex :: FN -> List -> String

var MakeCex = (0, _compositeJs.curry)(function (resolve, classes) {
  return (0, _compositeJs.compose)(trim, assemble, (0, _compositeJs.map)(resolve))(classes);
});

var _default = MakeCex(defaultResolver);

exports["default"] = _default;