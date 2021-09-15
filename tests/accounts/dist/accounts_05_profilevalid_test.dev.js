"use strict";

Feature('Appsero');

var locator = require('./accounts_locator_test');

Scenario('@accounts profile update ', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.click(locator.profilemenu);
          I.click('Account');
          I.clearField('First Name');
          I.fillField('First Name', 'Alvi');
          I.clearField('Last Name');
          I.fillField('Last Name', 'Tazwar');
          I.click('Update Profile');
          I.see('Profile updated successfully!');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@accounts');