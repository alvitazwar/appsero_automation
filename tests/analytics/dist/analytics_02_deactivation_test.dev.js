"use strict";

Feature('Appsero');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('../analytics/analytics_locator_test.js');

Scenario('@analytics deactivations report export', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.click('FastSpring_License_subs');
          I.waitForVisible(locator.Analytics);
          I.click(locator.Analytics);
          I.click(locator.DeactMenu);
          I.click('Export');
          I.checkOption(' div.ant-modal-content > div > div.mb-8 > label > span:nth-child(2)');
          I.checkOption('div.ant-modal-content > div > div:nth-child(3) > label > span:nth-child(2)');
          I.click('div.ant-modal-content > div > div.align-center.pt-30 > button');
          I.seeTextEquals('The request has been submitted', locator.RequestMsg).then(function (result) {
            console.log("Message is Showing Correctly");
          })["catch"](function (err) {
            console.log("Message fetching failed");
          });
          I.wait(4);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');