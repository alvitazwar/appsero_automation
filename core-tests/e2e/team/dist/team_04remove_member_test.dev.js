"use strict";

Feature('Appsero');

var _require = require('webdriverio/build/commands/element/waitForDisplayed'),
    waitForDisplayed = _require["default"];

var locator = require('./team_locator_test');

var create_team = require('./team_01create_test');

var remove_member = create_team.team_name;
Scenario('Team remove team member', function _callee2(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/teams'); //I.click('Dynamic Directives Representative'); // Principal Solutions Coordinator

          I.click(remove_member);
          I.wait(2);
          I.usePuppeteerTo('Handle SVG action', function _callee(_ref2) {
            var page, browser, svg;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.membersvgcheck));

                  case 3:
                    svg = _context.sent;
                    _context.next = 6;
                    return regeneratorRuntime.awrap(svg.hover());

                  case 6:
                    _context.next = 8;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.removebtn));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          I.forceClick(locator.removebtn);
          I.forceClick('Yes');
          I.wait(2);
          I.see('Removed Successfully.');

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@team');