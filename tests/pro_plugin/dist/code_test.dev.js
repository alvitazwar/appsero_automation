"use strict";

Feature('Appsero');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert; //const locator = require('../analytics/analytics_locator_test.js');
// Scenario('@code export', async({ I }) => {
//     I.loginAsAdmin();
//     I.amOnPage('/plugins');
//     I.click('bizon_paddle');
//     I.click('Integrate Appsero SDK.');
//     I.scrollTo('div > div > div > h2.mt-30');
//     let msg = '';
//     msg = await I.grabTextFrom('#user_guide_with_license');
//     console.log(msg);
// });


Scenario('test', function _callee(_ref) {
  var I, i;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          i = 0;

        case 3:
          if (!(i <= 7)) {
            _context.next = 10;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(console.log('step number', i));

        case 6:
          if (i % 2 == 0) {
            I.click('//li[2]/a[@href="/plugins"]');
            I.see('Plugins');
            I.click('Add Plugin');
            I.click('.custom-button.mr-16.premium');
            I.metadataPlugin();
            I.metadataVersion();
            I.metadataPHP();
            I.metadataWordpress();
            I.metadataTested();
            I.click('Next');
            I.click('Next');
            I.click('Yes');
          } else {
            I.say("loop not exectued");
          }

        case 7:
          i++;
          _context.next = 3;
          break;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
});