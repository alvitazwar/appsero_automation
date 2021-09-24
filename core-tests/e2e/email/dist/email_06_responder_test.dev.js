"use strict";

var Factory = require('rosie');

var faker = require('faker');

var locator = require('./email_locator_test.js.js.js');

var helpers = require('./helpers.js.js.js');

Feature('Appsero');
Scenario('@email Responder function valid ', function _callee2(_ref) {
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
                    I.click(locator.AutoResponder);
                    tryTo(function _callee() {
                        return regeneratorRuntime.async(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        helpers.enablefuntion();

                                    case 1:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        });
                    });
                    I.click(locator.SwitchBtn);
                    I.wait(2); //I.see('Deactivation auto responder disabled successfully');

                case 9:
                case "end":
                    return _context2.stop();
            }
        }
    });
}).tag('@email'); //email_05_pause_test.js