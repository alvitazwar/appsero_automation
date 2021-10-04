"use strict";

Feature('All the test codes are held');

var slugify = require('slugify');

var faker = require('faker');

var puppeteer = require('puppeteer');

var locator = require('./../analytics/analytics_locator_test'); // Scenario('Experiment ZOne', async({ I, loginAs }) => {
//     // loginAs('admin_staging');
//     // I.amOnPage('/plugins');
//     // I.Selectplugin();
//     // I.waitForVisible(locator.Analytics);
//     // I.click(locator.Analytics);
//     // I.click(locator.DeactMenu);
//     // I.click('Export');
//     // I.usePuppeteerTo('button', async({ page, browser }) => {
//     //     await page.waitForSelector('div > div.ant-modal-content > div > div.mb-8 > label > span.ant-checkbox > input');
//     //     const checkbox_theme = await page.$('div > div.ant-modal-content > div > div.mb-8 > label > span.ant-checkbox > input');
//     //     let initial_val = await (await checkbox_theme.getProperty('checked')).jsonValue()
//     //     console.log('initial state', initial_val);
//     //     if (initial_val == false) {
//     //         await checkbox_theme.click();
//     //     }
//     //     I.say('this is value of songita')
//     //     console.log('after the click the value', await (await checkbox_theme.getProperty('checked')).jsonValue());
//     // })
// });
// Scenario('Test Loweecase', async({ I, loginAs }) => {
//     let name_data = faker.commerce.productName();
//     console.log(name_data);
//     console.log('lowe case:', name_data.toLowerCase());
//     name_data = slugify(name_data, {
//         replacement: '-',
//         lower: true,
//     });
//     console.log('slugify:', name_data);
// });


Scenario('Check I see Return', function _callee(_ref) {
  var I, loginAs, result, result1, result2;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_new');
          I.amOnPage('/plugins'); // try {
          //     await I.see('please');
          //     result = true;
          // } catch (error) {
          //     result = false;
          // }
          //tryTo(async() => {
          // try {
          //     await I.see('please');
          //     result = true;
          // } catch {
          //     result = false;
          // }
          // if (result === true) {
          //     I.amOnPage('https://github.com');
          // } else if (result == false) {
          //     I.amOnPage('https://google.com')
          // }
          //})
          // I.see('plugins').then((result) => {
          //     return result = true;
          // }).catch((error) => {
          //     return result = false;
          // });

          _context.next = 5;
          return regeneratorRuntime.awrap(tryTo(function () {
            return I.see('Plugins');
          }));

        case 5:
          result1 = _context.sent;
          console.log('result1:', result1);
          _context.next = 9;
          return regeneratorRuntime.awrap(tryTo(function () {
            return I.see('Please');
          }));

        case 9:
          result2 = _context.sent;
          console.log('result2:', result2);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
});