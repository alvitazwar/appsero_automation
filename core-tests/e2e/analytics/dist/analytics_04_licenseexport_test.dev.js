"use strict";

Feature('Appsero Analytics Functional Test');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('./analytics_locator_test.js');

Scenario('@analytics licenses Export', function _callee(_ref) {
  var I, loginAs, check_license;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin');
          I.amOnPage('/plugins');
          I.Selectplugin();
          _context.next = 6;
          return regeneratorRuntime.awrap(tryTo(function () {
            return I.forceClick('Licenses');
          }));

        case 6:
          check_license = _context.sent;
          console.log(check_license);

          if (check_license == false) {
            console.log('User needs to buy license to use this feature');
          } else {
            I.wait(2);
            I.click('Export');
            I.click('Sync');
            I.click('Yes');
          } //I.see('Sync started successfully. You will get an email upon completion');


          I.wait(3);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');
;