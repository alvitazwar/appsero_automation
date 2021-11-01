"use strict";

Feature('Appsero Analytics Functional Test');

var locator = require('./analytics_locator_test.js');

Scenario('@analytics create order invalid', function _callee(_ref) {
  var I, loginAs, check_sales;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin');
          I.amOnPage('/plugins');
          I.Selectplugin();
          _context.next = 6;
          return regeneratorRuntime.awrap(tryTo(function () {
            return I.click(locator.Sales);
          }));

        case 6:
          check_sales = _context.sent;
          console.log('Premium Status', check_sales);

          if (check_sales == false) {
            console.log('User needs to buy license to use this feature');
          } else {
            I.wait(1);
            I.click(locator.Orders);
            I.click('Create Order');
            I.fillField('Customer Name', 'Automated');
            I.fillField('Customer Email', 'customer@gmail.com');
            I.fillField('Customer Phone', 'asvaa');
            I.fillField('Price', 'asda');
            I.fillField('Discount', 'abed');
            I.click('Submit');
            I.see('The price must be a number.');
            I.see('The discount must be a number.');
            I.say('Validated properly');
          }

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');