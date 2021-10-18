"use strict";

var Factory = require('rosie');

var faker = require('faker');

var locator = require('./email_locator_test.js');

var puppeteer = require('puppeteer');

var expect = require('chai').expect;

Feature('Appsero');
Scenario('@email send now email digest ', function _callee2(_ref) {
  var I, loginAs, msg;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.Selectplugin();
          I.click(locator.EmailMenu);
          I.waitForVisible(locator.EmailDigest);
          I.click(locator.EmailDigest);
          I.usePuppeteerTo('Handle SVG action', function _callee(_ref2) {
            var page, browser, svg;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.svgicon));

                  case 3:
                    svg = _context.sent;
                    _context.next = 6;
                    return regeneratorRuntime.awrap(svg.hover());

                  case 6:
                    I.wait(3);
                    _context.next = 9;
                    return regeneratorRuntime.awrap(page.waitForSelector(locator.SendNowbtn));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          I.forceClick(locator.SendNowbtn);
          I.wait(3);
          msg = 'Mail has been sent successfully.';
          I.see(msg);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@email');