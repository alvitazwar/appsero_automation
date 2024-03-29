"use strict";

Feature('Appsero Analytics Functional Test');

var locator = require('./analytics_locator_test.js');

Scenario('@analytics Edit License', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin');
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click(locator.LicenseMenu);
          I.click(locator.SelectLicense);
          I.click('Edit'); //Calendar Access

          I.click(locator.CalenderInput); //I.forceClick('//div[4]/div/div/div/div/div[1]/div/input');

          I.click(locator.CalenderDate);
          I.fillField(locator.activitionlimit, '5');
          I.click(locator.CalenderBtn);
          I.see('Updated successfully.');

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');