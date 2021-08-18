"use strict";

var Factory = require('rosie');

var faker = require('faker');

Feature('Wemail');
Scenario('Form submission', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.amOnPage('https://stagingwp.getwemail.io/');
          I.fillField('#wemail-form-field-4-first', faker.name.firstName());
          I.fillField('#wemail-form-field-4-last', faker.name.lastName());
          I.fillField('#wemail-form-field-5', faker.internet.email());
          I.click('ul > li:nth-child(3) > div > ul > li:nth-child(3) > div > button');
          I.see('Success!');
          I.click('OK');

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});