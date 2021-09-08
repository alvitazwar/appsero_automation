"use strict";

Feature('Appsero');

var locator = require('../analytics/analytics_locator_test.js');

Scenario('@analytics Edit License', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click(locator.LicenseMenu);
          I.click(locator.SelectLicense);
          I.click('Edit'); //Calendar Access

          I.click(locator.CalenderInput);
          I.forceClick('//div[4]/div/div/div/div/div[1]/div/input');
          I.click(locator.CalenderDate);
          I.fillField('div:nth-child(2) > div.ant-col.ant-form-item-control-wrapper > div > span > input', '5');
          I.click(locator.CalenderBtn);
          I.see('Updated successfully.');

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');