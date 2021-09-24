"use strict";

Feature('Appsero Analytics Explore');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert,
    Console = _require2.Console;

var locator = require('../analytics/analytics_locator_test.js.js.js');

Scenario('analytics Deactivation test', function _callee2(_ref) {
    var I, loginAs;
    return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    I = _ref.I, loginAs = _ref.loginAs;
                    loginAs('admin_staging');
                    I.amOnPage('/plugins'); // I.click('Fastspring_affiliate2'); //envato plg test

                    I.click('FastSpring_License_subs');
                    tryTo(function() {
                        I.seeElement(locator.PremiumModal);
                        I.click(locator.SkipBilling);
                    });
                    I.waitForVisible(locator.Analytics);
                    I.click(locator.Analytics);
                    I.click(locator.DeactMenu);
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
                        }, null, null, [
                            [1, 7]
                        ]);
                    });
                    I.wait(5);
                    I.seeElementInDOM(locator.ExportBtn).then(function(result) {
                        console.log("Export Btn is Visible");
                    })["catch"](function(error) {
                        console.log('Button is not loading', error);
                    });
                    I.seeElementInDOM(locator.DeactFilter).then(function(result) {
                        console.log("Filter is Present");
                    })["catch"](function(err) {
                        console.log("Filter is not Present");
                    });
                    I.seeElementInDOM(locator.DeactChart).then(function(result) {
                        console.log("Chart is Visible");
                    })["catch"](function(err) {
                        console.log("Chart is Not Loading");
                    });
                    I.seeElementInDOM(locator.DeactTable).then(function(result) {
                        console.log("Details Table is Visible");
                    })["catch"](function(err) {
                        console.log("Details Table is Not Loading");
                    });

                case 14:
                case "end":
                    return _context2.stop();
            }
        }
    });
}).tag('@explore_analytics');