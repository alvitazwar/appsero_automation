"use strict";

var Factory = require('rosie');

var faker = require('faker');

var locator = require('./email_locator_test.js');

Feature('Appsero Email Functional Test');
Scenario('@email edit email digest', function _callee2(_ref) {
  var I, loginAs, name;
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
            var page, browser, svg, btn;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    I.wait(3); //await page.waitForSelector(locator.svgicon);

                    _context.next = 4;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.svgicon));

                  case 4:
                    svg = _context.sent;
                    _context.next = 7;
                    return regeneratorRuntime.awrap(svg.hover());

                  case 7:
                    _context.next = 9;
                    return regeneratorRuntime.awrap(page.waitForXPath(locator.Editbtn));

                  case 9:
                    btn = _context.sent;
                    _context.next = 12;
                    return regeneratorRuntime.awrap(btn.click());

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          I.see('Send To');
          I.fillField('Send To', faker.internet.email());
          I.click(locator.Frequency);
          I.click(locator.FrequencyMonthly);
          I.click(locator.SendOn);
          I.click(locator.SendOn7th);
          name = '';
          name = faker.name.title();
          I.fillField('Digest Name', name);
          I.click('Submit');
          I.see(name);
          I.see('Email digest updated successfully.');
          I.say('Edit Successfull');

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@email');