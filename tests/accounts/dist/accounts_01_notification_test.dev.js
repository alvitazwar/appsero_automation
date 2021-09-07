"use strict";

var locator = require('./accounts_locator_test');

Feature('Appsero');
Scenario('@accounts Toggle Notification ', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.click(locator.profilemenu);
          I.click('Account');
          I.click('Notification Settings');
          I.click(locator.emailnotification);
          I.see(locator.msg);
          I.click(locator.emailnotification);
          I.see(locator.msg);
          I.click(locator.appseronoification);
          I.see(locator.msg);
          I.click(locator.appseronoification);
          I.see(locator.msg);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@accounts');