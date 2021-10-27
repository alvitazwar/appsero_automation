"use strict";

var locator = require('./email_locator_test.js');

var puppeteer = require('puppeteer');

var expect = require('chai').expect;

Feature('Appsero Email Functional Test');
Scenario('@email pause-active function ', function _callee2(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin');
          I.Selectplugin();
          I.click(locator.EmailMenu);
          I.waitForVisible(locator.EmailDigest);
          I.click(locator.EmailDigest);
          I.usePuppeteerTo('Handle SVG action', function _callee(_ref2) {
            var page, browser, svg, btn, msg;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    I.wait(3);
                    _context.next = 4;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.svgicon));

                  case 4:
                    svg = _context.sent;
                    _context.next = 7;
                    return regeneratorRuntime.awrap(svg.hover());

                  case 7:
                    _context.next = 9;
                    return regeneratorRuntime.awrap(Promise.race([page.waitForXPath(locator.PauseBtn), page.waitForXPath(locator.ActiveBtn)]));

                  case 9:
                    btn = _context.sent;
                    _context.next = 12;
                    return regeneratorRuntime.awrap(btn.click());

                  case 12:
                    _context.next = 14;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.alertmsg, 40));

                  case 14:
                    _context.next = 16;
                    return regeneratorRuntime.awrap(page.$eval(locator.alertmsg, function (ele) {
                      return ele.textContent;
                    }));

                  case 16:
                    msg = _context.sent;
                    expect(msg).to.be.a('string', 'Status updated successfully.');

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@email'); //email_05_pause_test.js