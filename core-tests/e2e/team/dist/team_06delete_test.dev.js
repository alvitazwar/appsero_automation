"use strict";

Feature('Appsero');

var account = require('./../accounts/accounts_locator_test');

var locator = require('./team_locator_test');

var faker = require('faker');

var create_team = require('./team_01create_test');

var delete_team = create_team.team_name;
Scenario('Team  delete', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          I.clearCookie();
          loginAs('admin_staging');
          I.amOnPage('/teams');
          I.click(delete_team);
          I.click('Settings');
          I.click(locator.deleteteambtn);
          I.click(locator.deleteyes); //I.dontSee('Automated team');

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@team');