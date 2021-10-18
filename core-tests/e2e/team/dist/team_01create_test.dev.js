"use strict";

Feature('Appsero');

var account = require('./../accounts/accounts_locator_test');

var locator = require('./team_locator_test');

var faker = require('faker');

var team_name = faker.name.title();
module.exports = {
  team_name: team_name
};
Scenario('Team create', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.click(account.profilemenu);
          I.click('Teams');
          I.click('New Team');
          I.fillField('Team name', team_name);
          I.fillField('Team contact email', faker.internet.email());
          I.click('Create Team');
          I.click('No thanks. I will send invitations later');
          I.click(locator.closesvg);
          I.amOnPage('/teams');
          I.see(team_name);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@team');