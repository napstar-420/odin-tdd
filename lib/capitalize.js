"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = capitalize;
function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}