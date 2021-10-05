"use strict";

Feature('Appsero Analytics Explore');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('../analytics/analytics_locator_test.js');

Scenario('analytics Stats test', function _callee2(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_new'); //loginAs('admin_staging');
          // I.amOnPage('/plugins');
          // I.click('Fastspring_affiliate2');
          // I.click('FastSpring_License_subs'); //envato plg test

          I.Selectplugin();
          tryTo(function () {
            I.seeElement(locator.PremiumModal);
            I.click(locator.SkipBilling);
          });
          I.waitForVisible(locator.Analytics, 5);
          I.click(locator.Analytics);
          I.click(locator.StatsMenu); //I.click(locator.SitesMenu);

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
                    _context.next = 9;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](1);

                  case 9:
                    //msg = await I.grabTextFrom(locator.UnknMsg);
                    console.log("The message We got is :", msg);
                    strict.notEqual(msg, 'Unknown error occurred.', 'This Page has Functional Problem');

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, null, null, [[1, 7]]);
          });
          I.wait(3); //console.log(txt);

          I.seeElementInDOM(locator.MainContentAnalytics);
          I.seeElementInDOM(locator.SkippedUser);
          I.seeElementInDOM(locator.Deactivation);
          I.seeElementInDOM(locator.MySqlVersion);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@explore_analytics').tag('@ab');