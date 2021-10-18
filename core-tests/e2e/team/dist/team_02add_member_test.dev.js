"use strict";

var puppeteer = require('puppeteer');

Feature('Appsero');

var locator = require('./team_locator_test');

var create_team = require('./team_01create_test');

var select_team = create_team.team_name;
Scenario('Team add team member', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/teams');
          I.click(select_team); // I.refreshPage();

          I.click('Add Members');
          I.fillField('User Email', 'saif@wphive.com');
          I.click(locator.memeberolediv);
          I.click(locator.developerrole); //I.selectOption('Role', 'manager');

          I.click('Submit'); //I.pressKey("Enter");

          I.see('Member Added Successfully');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@team');