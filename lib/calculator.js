"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function add(n, m) {
  return n + m;
}
function subtract(n, m) {
  return n - m;
}
function divide(n, m) {
  return n / m;
}
function multiply(n, m) {
  return n * m;
}
var calculator = {
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply
};
var _default = calculator;
exports["default"] = _default;