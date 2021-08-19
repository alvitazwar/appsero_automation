"use strict";

var Factory = require('rosie');

var faker = require('faker');

var locator = require('../email/email_locator_test.js');

var helpers = require('./helpers.js');

Feature('Appsero');
Scenario('@email Responder function valid ', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click(locator.EmailMenu);
          I.click(locator.AutoResponder); // tryTo(async() => {
          //     helpers.enablefuntion();
          //     
          // });
          //I.wait(3);
          //I.click(locator.SwitchBtn);
          // I.wait(2);
          // I.see('Deactivation auto responder disabled successfully');
          // var status = await I.grabCssPropertyFrom(locator.SwitchBtn);
          // I.grabValueFrom()

          console.log(status);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@email'); //email_05_pause_test.js