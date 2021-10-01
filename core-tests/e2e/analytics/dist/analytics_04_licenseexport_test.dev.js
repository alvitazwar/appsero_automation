"use strict";

Feature('Appsero');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('./analytics_locator_test.js.js');

Scenario('@analytics licenses Export', function _callee(_ref) {
    var I, loginAs;
    return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    I = _ref.I, loginAs = _ref.loginAs;
                    loginAs('admin_staging');
                    I.amOnPage('/plugins');
                    I.Selectplugin();
                    I.forceClick('Licenses');
                    I.wait(2);
                    I.click('Export');
                    I.click('Sync');
                    I.click('Yes');
                    I.see('Sync started successfully. You will get an email upon completion');
                    I.wait(3);

                case 11:
                case "end":
                    return _context.stop();
            }
        }
    });
}).tag('@analytics');;