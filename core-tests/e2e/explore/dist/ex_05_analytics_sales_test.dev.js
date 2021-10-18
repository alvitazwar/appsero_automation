"use strict";

Feature('Appsero Analytics Explore');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('../analytics/analytics_locator_test.js');

Scenario('Sales Explore test', function _callee3(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.Selectplugin();
          tryTo(function () {
            I.seeElement(locator.PremiumModal);
            I.click(locator.SkipBilling);
          });
          I.seeElementInDOM(locator.Sales);
          I.click(locator.Sales);
          I.click(locator.Overview); // I.click(locator.SitesMenu);

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

          I.seeElementInDOM(locator.Overview_Calender);
          I.seeElementInDOM(locator.MainContentAnalytics);
          I.seeElementInDOM(locator.Overview_Active_Sub);
          I.seeTextEquals('Renewal Orders', locator.Overview_Renewal_Order); //Go to Orders

          I.click(locator.Orders);
          I.wait(2);
          tryTo(function _callee2() {
            var msg;
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    msg = '';
                    _context2.prev = 1;
                    _context2.next = 4;
                    return regeneratorRuntime.awrap(I.grabTextFrom(locator.UnknMsg));

                  case 4:
                    msg = _context2.sent;
                    _context2.next = 9;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](1);

                  case 9:
                    //msg = await I.grabTextFrom(locator.UnknMsg);
                    console.log("The message We got is :", msg);
                    strict.notEqual(msg, 'Unknown error occurred.', 'This Page has Functional Problem');

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, null, null, [[1, 7]]);
          });
          I.seeElementInDOM(locator.MainContentAnalytics);
          I.seeElementInDOM(locator.Orders_Search);
          I.seeElementInDOM(locator.Orders_Create_btn);

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  });
}).tag('@explore_analytics').tag('@gg');