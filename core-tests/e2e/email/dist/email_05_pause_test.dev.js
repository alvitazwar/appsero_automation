"use strict";

var locator = require('./email_locator_test.js.js.js');

Feature('Appsero');
Scenario('@email pause-active function ', function _callee2(_ref) {
    var I, loginAs;
    return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    I = _ref.I, loginAs = _ref.loginAs;
                    loginAs('admin_staging');
                    I.amOnPage('/plugins');
                    I.Selectplugin();
                    I.click(locator.EmailMenu);
                    I.waitForVisible(locator.EmailDigest);
                    I.click(locator.EmailDigest);
                    I.moveCursorTo(locator.svgicon);
                    tryTo(function _callee() {
                        return regeneratorRuntime.async(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        I.forceClick(locator.PauseBtn);
                                        I.wait(2);
                                        I.see('Status updated successfully.');

                                    case 3:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        });
                    });
                    I.wait(3);
                    I.moveCursorTo(locator.svgicon);
                    I.forceClick(locator.ActiveBtn);
                    I.wait(2);
                    I.see('Status updated successfully.');

                case 14:
                case "end":
                    return _context2.stop();
            }
        }
    });
}).tag('@email'); //email_05_pause_test.js