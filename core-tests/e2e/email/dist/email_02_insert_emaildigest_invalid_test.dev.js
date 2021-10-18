"use strict";

var Factory = require('rosie');

var faker = require('faker');

var helper = require('./helpers');

var locator = require('./email_locator_test.js');

Feature('Appsero');
Scenario('@email insert email digest Invalid', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.Selectplugin();
          I.click(locator.EmailMenu);
          I.waitForVisible(locator.EmailDigest);
          I.click(locator.EmailDigest);
          I.click('Add Email Digest');
          I.fillField('Send To', faker.internet.email() + '##');
          I.click(locator.Frequency);
          I.click(locator.FrequencyWeekly);
          I.click(locator.SendOn);
          I.click(locator.SendOnFriday);
          I.fillField('Digest Name', faker.name.title());
          I.click('Submit');
          I.see('send to emails are invalid.');
          I.say('Email Verification is okay');

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@email');