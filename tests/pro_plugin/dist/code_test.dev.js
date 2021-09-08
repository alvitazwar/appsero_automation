"use strict";

Feature('Appsero');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var faker = require('faker');

var cry = require('crypto');

Scenario('test', function _callee(_ref) {
  var I, i, data, fake;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;

          for (i = 0; i <= 3; i++) {
            data = cry.randomBytes(10).toString("hex"); //console.log(data);

            fake = faker.random.alphaNumeric(20);
            console.log(fake);
          }

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});