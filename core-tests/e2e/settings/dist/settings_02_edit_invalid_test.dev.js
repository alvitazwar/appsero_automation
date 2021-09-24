"use strict";

Feature('Appsero');

var locator = require('./settings_locator_test');

var faker = require('faker');

Scenario('@settings edit invalid ', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          //loginAs('admin_staging');
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click(locator.settingsmenu);
          I.click(locator.editsubmenu);
          I.fillField('//*[@id="version"]', faker.random.alphaNumeric(19));
          I.click('Update Plugin');
          I.see('The version may not be greater than 18 characters.');
          I.clearField('//*[@id="version"]');
          I.fillField('//*[@id="version"]', '1.2');
          I.click('//*[@id="php"]/div/div');
          I.clearField('//*[@id="php"]');
          I.click('//*[@id="requires"]/div/div');
          I.clearField('//*[@id="requires"]');
          I.click('//*[@id="tested"]/div/div');
          I.clearField('//*[@id="tested"]'); // I.fillField('//*[@id="homepage"]/div/div');
          // I.clearField('//*[@id="homepage"]');
          // I.clearField('//*[@id="demo"]');

          I.click('Update Plugin'); //I.see('Please fill up all the fields correctly.');

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@settings'); //email_05_pause_test.js