"use strict";

Feature('Appsero');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert; //const locator = require('../analytics/analytics_locator_test.js');


Scenario('@code export', function _callee(_ref) {
  var I, msg;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.click('bizon_paddle');
          I.click('Integrate Appsero SDK.');
          I.scrollTo('div > div > div > h2.mt-30');
          msg = '';
          _context.next = 9;
          return regeneratorRuntime.awrap(I.grabTextFrom('#user_guide_with_license'));

        case 9:
          msg = _context.sent;
          console.log(msg);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
});