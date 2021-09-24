"use strict";

Feature('Appsero');
Scenario('@settings create metadata ', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging'); // I.amOnPage('https://staging.appsero.com/login');
          // I.fillField('Email Address', 'alvitazwar@wedevs.com');
          // I.fillField('Password','crisis052');
          // I.click('Log in');
          // I.see('Plugins');

          I.amOnPage('/plugins');
          I.Selectplugin();
          I.click('Settings');
          I.amOnPage('/metadata');
          I.metadataCreate(); //I.fillField('Name','Automated metadata');

          I.click('#datatype > div > div > div');
          I.click('ul[role="listbox"] > li:nth-of-type(1)');
          I.click('Add Field');
          I.see('Meta Field Added successfully.');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@settings');