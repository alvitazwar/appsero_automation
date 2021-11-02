"use strict";

Feature('Appsero Analytics Functional Test');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('./analytics_locator_test.js');

Scenario('@analytics customer export', function _callee(_ref) {
  var I, loginAs, check_sales;
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
            return I.click(locator.Sales);
          }));

        case 6:
          check_sales = _context.sent;
          console.log('Premium Status', check_sales);

          if (check_sales == false) {
            console.log('User needs to buy license to use this feature');
          } else {
            I.wait(1);
            I.forceClick(locator.Customer);
            I.waitForClickable(locator.CustomerExportBtn);
            I.forceClick(locator.CustomerExportBtn);
            I.waitForVisible(locator.RequestMsg, 5);
            I.seeTextEquals('The request has been submitted', locator.RequestMsg).then(function (result) {
              console.log("Message is Showing Correctly");
            })["catch"](function (err) {
              console.log("Message fetching failed");
            });
            I.wait(2);
          }

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');
;