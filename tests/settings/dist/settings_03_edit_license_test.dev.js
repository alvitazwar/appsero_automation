"use strict";

Feature('Appsero');

var locator = require('./settings_locator_test');

Scenario('@settings edit License ', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click('//*[@id="app"]//section/main//div[1]/ul[2]/li[1]');
          I.click('Update Licensing');
          I.see('Settings has been updated.');

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@settings'); //email_05_pause_test.js