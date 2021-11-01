"use strict";

Feature('Appsero Analytics Functional Test');

var Factory = require('rosie');

var faker = require('faker');

var locator = require('./analytics_locator_test.js');

Scenario('@analytics create order valid', function _callee(_ref) {
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
            I.fillField('Customer Name', faker.name.firstName());
            I.fillField('Customer Email', faker.internet.email());
            I.fillField('Customer Phone', '2321');
            I.fillField('Price', '100');
            I.fillField('Discount', '0');
            I.click('Submit');
            I.wait(2);
            I.see('Order created Successfully');
          }

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');