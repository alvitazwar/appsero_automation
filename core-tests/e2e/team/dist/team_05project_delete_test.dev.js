"use strict";

Feature('Appsero');

var locator = require('./team_locator_test');

var create_team = require('./team_01create_test');

var project_delete = create_team.team_name;
Scenario('Team project delete', function _callee2(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/teams');
          I.click(project_delete); //I.click('Automated Team');

          I.wait(2);
          I.click(locator.projectmenu);
          I.usePuppeteerTo('Handle SVG action', function _callee(_ref2) {
            var page, browser, svg;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    I.wait(3);
                    _context.next = 4;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.projectsvgcheck));

                  case 4:
                    svg = _context.sent;
                    _context.next = 7;
                    return regeneratorRuntime.awrap(svg.hover());

                  case 7:
                    _context.next = 9;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.removebtn));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          I.forceClick(locator.removebtn);
          I.forceClick('Yes');
          I.wait(2);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@team');