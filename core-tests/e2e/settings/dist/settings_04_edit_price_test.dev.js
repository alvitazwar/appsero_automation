"use strict";

Feature('Appsero');
Scenario('edit price_regular ', function _callee(_ref) {
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

          I.amOnPage('https://staging.appsero.com/plugins');
          I.click('envato plg test');
          I.click('Settings');
          I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/settings/variations');
          I.fillField('//div[@class="variation-item"]/div[1]/div[1]//input[@placeholder="How many sites can be active"]', '200');
          I.fillField('//input[@placeholder="Enter price"]', '2');
          I.click('//form[@class="ant-form ant-form-horizontal"]/div[3]/div[@class="variation-item"]/div[2]/div[1]//input');
          I.click('//div[3]/div[@class="variation-item"]//span[@class="ant-form-item-children"]//div[@class="ant-select-selection__rendered"]');
          I.click('//ul[@role="listbox"]/li[1]');
          I.fillField('//form[@class="ant-form ant-form-horizontal"]/div[3]//input[@placeholder="Recurring Times"]', '1'); //I.selectOption('')

          I.click('Submit');
          I.see('Variations has been updated.');

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@settings'); //email_05_pause_test.js