"use strict";

Feature('Appsero');

var Factory = require('rosie');

var faker = require('faker');

var locator = require('../analytics/analytics_locator_test.js');

Scenario('@analytics create order valid', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click(locator.Sales);
          I.click(locator.Orders);
          I.click('Create Order');
          I.fillField('Customer Name', faker.name.firstName());
          I.fillField('Customer Email', faker.internet.email());
          I.fillField('Customer Phone', '2321');
          I.fillField('Price', '100');
          I.fillField('Discount', '0');
          I.click('Submit');
          I.wait(2);
          I.see('Order created Successfully');

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');