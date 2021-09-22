"use strict";

Feature('Appsero');
Scenario('Team add team member', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging'); // I.amOnPage('https://staging.appsero.com/login');
          // I.fillField('Email Address', 'alvitazwar@wedevs.com');
          // I.fillField('Password','crisis052');
          // I.click('Log in');
          // I.see('Plugins');
          //I.click('//*[@id="app"]/section/section/header/div[2]/a');
          //I.click('Teams');

          I.amOnPage('https://staging.appsero.com/teams');
          I.click('Automated team'); //I.click('Projects');
          //I.amOnPage('https://staging.appsero.com/teams/31/projects');
          //I.waitForElement('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[2]', 30);

          I.refreshPage();
          I.wait(3);
          I.click('Add Members');
          I.fillField('User Email', 'saif@wphive.com');
          I.click('//*[@id="role"]/div');
          I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[2]'); //I.selectOption('Role', 'manager');

          I.click('Submit'); //I.pressKey("Enter");

          I.see('Saif');

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@team');