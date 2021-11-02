"use strict";

Feature('Appsero Analytics Functional Test');

var locator = require('./analytics_locator_test.js');

Scenario('@analytics Edit License', function _callee(_ref) {
  var I, loginAs, check_lise;
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
            return I.forceClick('Licenses');
          }));

        case 6:
          check_lise = _context.sent;
          console.log('Premium Status', check_lise);

          if (check_lise == false) {
            console.log('User needs to buy license to use this feature');
          } else {
            I.wait(1);
            I.click(locator.SelectLicense);
            I.click('Edit'); //Calendar Access

            I.click(locator.CalenderInput); //I.forceClick('//div[4]/div/div/div/div/div[1]/div/input');

            I.click(locator.CalenderDate);
            I.fillField(locator.activitionlimit, '5');
            I.click(locator.CalenderBtn);
            I.see('Updated successfully.');
          }

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');