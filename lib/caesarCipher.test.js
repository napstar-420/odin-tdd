"use strict";

var _caesarCipher = _interopRequireDefault(require("./caesarCipher"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test('Simple Text', function () {
  expect((0, _caesarCipher["default"])("Good old days", 5)).toBe("ltti tqi ifdx");
});
test('0 offset', function () {
  expect((0, _caesarCipher["default"])("Good old days", 0)).toBe("Good old days");
});
test('with numbers', function () {
  expect((0, _caesarCipher["default"])("Good old days 123", 5)).toBe("ltti tqi ifdx 123");
});
test('offset less than 0', function () {
  expect(function () {
    return (0, _caesarCipher["default"])("Good old days 123", -5);
  }).toThrow('Offset can\'t be less than 0 or greater than 26');
});
test('all alphabets', function () {
  expect((0, _caesarCipher["default"])('abcdefghijklmnopqrstuvwxyz', 2)).toBe('cdefghijklmnopqrstuvwxyzab');
});