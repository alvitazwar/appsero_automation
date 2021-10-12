"use strict";

Feature('Appsero');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('./analytics_locator_test.js');

Scenario('@analytics customer export', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click(locator.Sales); //I.waitForVisible(locator.Customer, 5);

          I.forceClick(locator.Customer);
          I.click('Export');
          I.seeTextEquals('The request has been submitted', locator.RequestMsg).then(function (result) {
            console.log("Message is Showing Correctly");
          })["catch"](function (err) {
            console.log("Message fetching failed");
          });
          I.wait(3);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');
;