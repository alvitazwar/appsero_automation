"use strict";

var Factory = require('rosie');

var faker = require('faker');

var helper = require('./helpers');

var locator = require('./email_locator_test.js');

Feature('Appsero Email Functional Test');
Scenario('@email insert email digest valid', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin');
          I.Selectplugin();
          I.click(locator.EmailMenu);
          I.waitForVisible(locator.EmailDigest);
          I.click(locator.EmailDigest);
          I.click('Add Email Digest');
          I.fillField('Send To', helper.range(5, function () {
            return faker.internet.email();
          }).join(','));
          I.click(locator.Frequency);
          I.click(locator.FrequencyWeekly);
          I.click(locator.SendOn);
          I.click(locator.SendOnFriday);
          I.fillField('Digest Name', faker.name.title());
          I.click('Submit');
          I.see('Email digest created successfully.');

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@email');