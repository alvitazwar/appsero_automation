"use strict";

var puppeteer = require('puppeteer');

(function _callee() {
  var browser, page;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(puppeteer.launch());

        case 2:
          browser = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(browser.newPage());

        case 5:
          page = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(page["goto"]('https://qa.rtcamp.net/members/demo/media/1651/'));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(page["goto"]('https://staging.appsero.com'));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(browser.close());

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
});

Scenario('aTest', function _callee2(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I;

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});