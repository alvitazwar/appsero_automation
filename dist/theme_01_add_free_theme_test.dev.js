"use strict";

Feature('Appsero');
Scenario('@themes add free theme ', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          loginAs('admin_staging');
          I.see('Plugins');
          I.click('Themes');
          I.click('//*[@id="app"]//main/div/div[1]/button');
          I.click('//*[@id="app"]//div[2]/button[2]');
          I.click('//*[@id="app"]//div[5]/a');
          I.fillField('Theme Name', 'Theme_four');
          I.fillField('Theme Version', '1.0');
          I.click('Next');
          I.click('//*[@id="app"]//div//div[4]/a');
          I.click('Skip');
          I.click('Next');
          I.click('Done');
          I.click('Done');

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@themes');