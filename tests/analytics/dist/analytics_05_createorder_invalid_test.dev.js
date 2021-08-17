"use strict";

Feature('Appsero');

var locator = require('../analytics/analytics_locator_test.js');

Scenario('@analytics create order invalid', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.click('FastSpring_License_subs');
          I.click(locator.Sales);
          I.click(locator.Orders);
          I.click('Create Order');
          I.fillField('Customer Name', 'Automated');
          I.fillField('Customer Email', 'customer@gmail.com');
          I.fillField('Customer Phone', 'asvaa');
          I.fillField('Price', 'asda');
          I.fillField('Discount', 'abed');
          I.click('Submit');
          I.see('Unknown error occurred.');
          I.say('Not Validate properly');

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');