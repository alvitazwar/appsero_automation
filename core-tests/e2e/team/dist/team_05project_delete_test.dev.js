"use strict";

Feature('Appsero');

var locator = require('./team_locator_test');

Scenario('Team project delete', function _callee2(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/teams');
          I.click('Automated Team');
          I.wait(2); //I.click('//*[@id="app"]//main//div[2]/div[2]/div//div[3]/a');
          //I.waitForElement('/html/body/div[3]/div/div/ul/li/span',30);

          I.click(locator.projectmenu);
          I.usePuppeteerTo('Handle SVG action', function _callee(_ref2) {
            var page, browser;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    I.wait(3);
                    _context.next = 4;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.projectsvgcheck));

                  case 4:
                    _context.next = 6;
                    return regeneratorRuntime.awrap(page.hover(locator.projectsvgcheck));

                  case 6:
                    _context.next = 8;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.removebtn));

                  case 8:
                    _context.next = 10;
                    return regeneratorRuntime.awrap(page.click(locator.removebtn));

                  case 10:
                    //I.click('Remove');
                    I.click('Yes');

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          I.wait(2);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@team');