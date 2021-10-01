"use strict";

Feature('Appsero');

var locator = require('./team_locator_test');

Scenario('Team add project', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/teams');
          I.click('Automated team'); //I.refreshPage();
          //I.click('Projects');
          //I.click('//*[@id="app"]//div/div[1]/ul/li[4]/a');
          //I.amOnPage('https://staging.appsero.com/teams/31/projects');

          I.waitForElement('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[2]', 30);
          I.click('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[2]');
          I.fillField('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[3]/div/input', 'ww'); //I.waitForElement('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[3]/div/input',30);
          //  I.click('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[3]/div/input');

          I.pressKey("Enter");
          I.refreshPage();
          I.see('ww');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@team');