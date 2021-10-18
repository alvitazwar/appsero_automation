"use strict";

Feature('Appsero');

var locator = require('./settings_locator_test');

Scenario('@settings create metadata ', function _callee(_ref) {
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
          I.click(locator.metadatasubmenu);
          I.metadataCreate(); //I.fillField('Name','Automated metadata');

          I.click(locator.selectdropdown);
          I.click(locator.get_value());
          I.click('Add Field');
          I.see('Meta Field Added successfully.');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@settings');