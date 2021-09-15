"use strict";

var Factory = require('rosie');

var faker = require('faker');

var locator = require('../email/email_locator_test.js');

Feature('Appsero');
Scenario('@email send now email digest ', function _callee(_ref) {
  var I, loginAs, msg;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click(locator.EmailMenu);
          I.waitForVisible(locator.EmailDigest);
          I.click(locator.EmailDigest);
          I.moveCursorTo(locator.svgicon);
          I.forceClick(locator.SendNowbtn);
          I.wait(2);
          msg = 'Mail has been sent successfully.';
          I.see(msg);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@email');