"use strict";

Feature('Appsero Analytics Functional Test');
;

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('./analytics_locator_test.js');

Scenario('@analytics user report export', function _callee(_ref) {
  var I, loginAs, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin');
          I.Selectplugin();
          I.waitForVisible(locator.Analytics);
          I.click(locator.Analytics);
          I.click(locator.UserMenu);
          I.click('Export');
          I.wait(2);
          _context.next = 10;
          return regeneratorRuntime.awrap(I.check_analytics_premium());

        case 10:
          result = _context.sent;

          if (result == true) {
            console.log('Buy license To use this premium Feature');
          } else {
            // I.click(locator.StatExportBtn);
            I.waitForVisible(locator.RequestMsg);
            I.seeTextEquals('The request has been submitted', locator.RequestMsg).then(function (result) {
              console.log("Message is Showing Correctly");
            })["catch"](function (err) {
              console.log("Message fetching failed");
            });
          }

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');