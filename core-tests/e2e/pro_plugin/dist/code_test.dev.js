"use strict";

Feature('All the test codes are held');

var slugify = require('slugify');

var faker = require('faker'); // Scenario('Check Free Account', async({ I, loginAs }) => {
//     loginAs('admin');
//     I.click('//li[2]/a[@href="/plugins"]');
//     I.see('Plugins');
//     I.click('Add Plugin');
//     I.click('.custom-button.mr-16.premium');
//     const result = await tryTo(() => I.seeInCurrentUrl('/choose-billing-package'));
//     console.log(result);
//     if (result == true) {
//         console.log('Updgrade to pro');
//     } else {
//         I.metadataPlugin();
//         I.metadataVersion();
//         I.metadataPHP();
//         I.metadataWordpress();
//         I.metadataTested();
//         I.click('Next');
//         I.click('Next');
//         I.click('Yes');
//     }
// });


Scenario('@add views', function _callee(_ref) {
  var I, loginAs, i;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          I.amOnPage('https://github.com/alvitazwar');

          for (i = 0; i <= 300; i++) {
            I.refreshPage();
          }

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});