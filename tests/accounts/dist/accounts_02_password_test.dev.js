"use strict";

Feature('Appsero');
Scenario(' Password ', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.click('//*[@id="app"]/section/section/header/div[2]/a');
          I.click('Account');
          I.click('Security');
          I.fillField('Current Password', 'Crisis052');
          I.fillField('New Password', 'crisis052');
          I.fillField('Confirm New Password', 'crisis052');
          I.click('Update Profile');
          I.click('Update Profile');
          I.see('Password Updated Successfully.');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
});