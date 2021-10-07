"use strict";

Feature('Appsero');

var locator = require('./team_locator_test');

Scenario('Team remove team member', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/teams');
          I.click('Automated Team');
          I.moveCursorTo('#app > section > section > main > div > div.member-inner-page.page-content > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.mr-8.ml-auto > a');
          I.wait(2);
          I.click('Remove');
          I.click('Yes'); //I.pressKey("Enter");

          I.dontSee('Saif');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@team');