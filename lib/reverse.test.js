"use strict";

var _reverse = _interopRequireDefault(require("./reverse.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test('"test" becomes "tset"', function () {
  expect((0, _reverse["default"])('test')).toBe('tset');
});
test('"what about spaces" becomes "secaps tuoba tahw"', function () {
  expect((0, _reverse["default"])('what about spaces')).toBe('secaps tuoba tahw');
});
test('"12345" becomes "54321"', function () {
  expect((0, _reverse["default"])('12345')).toBe('54321');
});