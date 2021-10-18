"use strict";

Feature('Appsero');

var locator = require('./team_locator_test');

var create_team = require('./team_01create_test');

var team_choose = create_team.team_name;
Scenario('Team add project', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/teams');
          I.click(team_choose);
          I.waitForElement(locator.projectmenu, 30);
          I.click(locator.projectmenu);
          I.waitForClickable(locator.addproject);
          I.click(locator.addproject);
          I.fillField(locator.inputaddproject, 'qq');
          I.pressKey("Enter");
          I.see('Project Added Successfully.'); //I.refreshPage();

          I.see('qq');

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@team');