"use strict";

Feature('Appsero Analytics Explore');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('../analytics/analytics_locator_test.js');

Scenario('analytics Sites test', function _callee2(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.click('Fastspring_affiliate2'); //envato plg test
          // I.click('envato plg test');

          tryTo(function () {
            I.seeElement(locator.PremiumModal);
            I.click(locator.SkipBilling);
          });
          I.waitForVisible(locator.Analytics);
          I.click(locator.Analytics);
          I.click(locator.SitesMenu);
          tryTo(function _callee() {
            var msg;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    msg = '';
                    _context.prev = 1;
                    _context.next = 4;
                    return regeneratorRuntime.awrap(I.grabTextFrom(locator.UnknMsg));

                  case 4:
                    msg = _context.sent;
                    _context.next = 10;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](1);
                    console.log(_context.t0);

                  case 10:
                    //msg = await I.grabTextFrom(locator.UnknMsg);
                    console.log("The message We got is :", msg);
                    strict.notEqual(msg, 'Unknown error occurred.', 'This Page has Functional Problem');

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, null, null, [[1, 7]]);
          });
          I.wait(3);
          I.seeElementInDOM(locator.ExportBtn).then(function (result) {
            console.log("Export Btn is Visible");
          })["catch"](function (error) {
            console.log('Button is not not loading');
          });
          I.seeElementInDOM(locator.StatusDrpDwn).then(function (result) {
            console.log("Status Drop Down is Present");
          })["catch"](function (err) {
            console.log("Status Dropdown is not Present");
          });
          I.seeElementInDOM(locator.SitesTable)["catch"](function (e) {
            console.log("Table is Not Loading");
          }); // I.seeElementInDOM(locator.SitesTable);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@explore_analytics').tag('@cd');