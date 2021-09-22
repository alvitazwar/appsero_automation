"use strict";

Feature('Appsero');
Scenario('Team  delete', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          I.clearCookie();
          loginAs('admin_staging');
          I.click('//*[@id="app"]/section/section/header/div[2]/a');
          I.click('Teams');
          I.click('Automated team');
          I.refreshPage(); //I.amOnPage('https://staging.appsero.com/teams/43/members');

          I.click('Settings'); //I.waitForElement('/html/body/div[3]/div/div/ul/li/span',30);
          //I.click('Delete Team');

          I.click('//*[@id="app"]//div/form/div[4]/button[1]');
          I.click('.ant-btn-primary.ant-btn-sm');
          I.dontSee('Automated team');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@team');