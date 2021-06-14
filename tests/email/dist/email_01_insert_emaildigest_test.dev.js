"use strict";

var Factory = require('rosie');

var faker = require('faker');

var helper = require('./helpers');

Feature('Appsero');
Scenario('@email insert email digest valid', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.click('envato plg test');
          I.click('Email');
          I.amOnPage('/plugins/envato-plg-test/email-digest');
          I.click('Add Email Digest');
          I.fillField('Send To', helper.range(8, function () {
            return faker.internet.email();
          }).join(','));
          I.click('//*[@id="frequency"]/div/div');
          I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[2]');
          I.click('//*[@id="send_on"]/div/div');
          I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[5]');
          I.fillField('Digest Name', 'Test automation');
          I.click('Submit');
          I.see('Test automation');

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@email');