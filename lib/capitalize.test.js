"use strict";

var capitalize = require('./capitalize');
test('"test" should become "Test"', function () {
  expect(capitalize('test')).toBe('Test');
});
test('"Test" should become "Test"', function () {
  expect(capitalize('Test')).toBe('Test');
});
test('"TEST" should become "TEST"', function () {
  expect(capitalize('TEST')).toBe('TEST');
});
test('"three word test" should become "Three word test"', function () {
  expect(capitalize('three word test')).toBe('Three word test');
});