"use strict";

var Factory = require('rosie');

var faker = require('faker');

var locator = require('../email/email_locator_test.js');

Feature('Appsero');
Scenario('@email edit email digest', function _callee(_ref) {
  var I, loginAs, name;
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
          I.forceClick(locator.Editbtn);
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

        case 22:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@email');