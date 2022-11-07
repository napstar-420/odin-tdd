"use strict";

var reverseString = require('./reverse.js');
test('"test" becomes "tset"', function () {
  expect(reverseString('test')).toBe('tset');
});
test('"what about spaces" becomes "secaps tuoba tahw"', function () {
  expect(reverseString('what about spaces')).toBe('secaps tuoba tahw');
});
test('"12345" becomes "54321"', function () {
  expect(reverseString('12345')).toBe('54321');
});