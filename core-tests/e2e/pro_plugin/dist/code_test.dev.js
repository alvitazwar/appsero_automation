"use strict";

Feature('All the test codes are held');

var slugify = require('slugify');

var faker = require('faker');

var puppeteer = require('puppeteer');

var locator = require('./../analytics/analytics_locator_test');

Scenario('Experiment ZOne', function _callee2(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.waitForVisible(locator.Analytics);
          I.click(locator.Analytics);
          I.click(locator.DeactMenu);
          I.click('Export');
          I.usePuppeteerTo('button', function _callee(_ref2) {
            var page, browser, checkbox_theme, initial_val;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(page.waitForSelector('div > div.ant-modal-content > div > div.mb-8 > label > span.ant-checkbox > input'));

                  case 3:
                    _context.next = 5;
                    return regeneratorRuntime.awrap(page.$('div > div.ant-modal-content > div > div.mb-8 > label > span.ant-checkbox > input'));

                  case 5:
                    checkbox_theme = _context.sent;
                    _context.t0 = regeneratorRuntime;
                    _context.next = 9;
                    return regeneratorRuntime.awrap(checkbox_theme.getProperty('checked'));

                  case 9:
                    _context.t1 = _context.sent.jsonValue();
                    _context.next = 12;
                    return _context.t0.awrap.call(_context.t0, _context.t1);

                  case 12:
                    initial_val = _context.sent;
                    console.log('initial state', initial_val);

                    if (!(initial_val == false)) {
                      _context.next = 17;
                      break;
                    }

                    _context.next = 17;
                    return regeneratorRuntime.awrap(checkbox_theme.click());

                  case 17:
                    I.say('this is value of songita');
                    _context.t2 = console;
                    _context.t3 = regeneratorRuntime;
                    _context.next = 22;
                    return regeneratorRuntime.awrap(checkbox_theme.getProperty('checked'));

                  case 22:
                    _context.t4 = _context.sent.jsonValue();
                    _context.next = 25;
                    return _context.t3.awrap.call(_context.t3, _context.t4);

                  case 25:
                    _context.t5 = _context.sent;

                    _context.t2.log.call(_context.t2, 'after the click the value', _context.t5);

                  case 27:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
});