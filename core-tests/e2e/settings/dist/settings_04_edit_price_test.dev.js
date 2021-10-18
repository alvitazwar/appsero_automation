"use strict";

Feature('Appsero');

var locator = require('./settings_locator_test');

Scenario('edit price_regular ', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click(locator.settingsmenu);
          I.click(locator.pricingsubmenu); //I.click(locator.activitionlimit);

          I.fillField(locator.activitionlimit, '200');
          I.fillField(locator.productprice, '220'); //I.selectOption('')

          I.click('Submit');
          I.see('Variations has been updated.');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@settings'); //email_05_pause_test.js