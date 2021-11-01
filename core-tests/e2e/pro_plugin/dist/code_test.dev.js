"use strict";

Feature('All the test codes are held');

var slugify = require('slugify');

var faker = require('faker');

Scenario('Check Free Account', function _callee(_ref) {
  var I, loginAs, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin');
          I.click('//li[2]/a[@href="/plugins"]');
          I.see('Plugins');
          I.click('Add Plugin');
          I.click('.custom-button.mr-16.premium');
          _context.next = 8;
          return regeneratorRuntime.awrap(tryTo(function () {
            return I.seeInCurrentUrl('/choose-billing-package');
          }));

        case 8:
          result = _context.sent;
          console.log(result);

          if (result == true) {
            console.log('Updgrade to pro');
          } else {
            I.metadataPlugin();
            I.metadataVersion();
            I.metadataPHP();
            I.metadataWordpress();
            I.metadataTested();
            I.click('Next');
            I.click('Next');
            I.click('Yes');
          }

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
});