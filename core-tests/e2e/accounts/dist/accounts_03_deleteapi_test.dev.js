"use strict";

Feature('Appsero Accounts');

var locator = require('./accounts_locator_test');

Scenario('@accounts api delete ', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/');
          I.click(locator.apikeymenu);
          I.click(locator.createapibutton);
          I.see('Not connected');
          I.click(locator.firstdelete);
          I.click('Yes');
          I.see('API Key Deleted Successfully.');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@accounts');