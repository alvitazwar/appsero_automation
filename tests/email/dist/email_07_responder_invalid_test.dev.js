"use strict";

Feature('Appsero');
Scenario(' Responder function invalid ', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          // I.amOnPage('https://staging.appsero.com/login');
          // I.fillField('Email Address', 'alvitazwar@wedevs.com');
          // I.fillField('Password','crisis052');
          // I.click('Log in');
          // I.see('Plugins');
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.click('envato plg test');
          I.click('Email');
          I.amOnPage('/plugins/envato-plg-test/settings/deactivation-auto-responder');
          I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
          I.wait(2);
          I.see('Deactivation auto responder enabled successfully');
          I.fillField('//*[@id="app"]//div/span/input', '2adbc@gm//?com');
          I.click('Update');
          I.wait(2);
          I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
          I.wait(2);
          I.see('Deactivation auto responder disabled successfully');
          I.see('Reply to email updated successfully');
          I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
          I.say('Email verification not included');

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}); //email_05_pause_test.js