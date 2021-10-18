"use strict";

Feature('Appsero');

var locator = require('./settings_locator_test');

Scenario('@settings edit valid ', function _callee(_ref) {
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
          I.click(locator.editsubmenu);
          I.metadataVersion();
          I.metadataPHP();
          I.metadataWordpress();
          I.metadataTested();
          I.click('Update Plugin');
          I.see('Plugin information has been updated.');

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@settings');