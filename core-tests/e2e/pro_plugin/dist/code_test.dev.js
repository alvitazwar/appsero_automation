"use strict";

Feature('All the test codes are held');

var slugify = require('slugify');

var faker = require('faker');

var puppeteer = require('puppeteer');

var locator = require('./../analytics/analytics_locator_test');

var path = require('path');

var fs = require('fs');

var read_data; // Scenario('Experiment ZOne', async({ I, loginAs }) => {
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
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          //let result;
          //loginAs('admin_new');
          // I.amOnPage('/plugins');
          // const result1 = await tryTo(() => I.see('Plugins'));
          // if (result1 == true) {
          //     I.amOnPage('https://github.com');
          // }
          // console.log('result1:', result1);
          // const result2 = await tryTo(() => I.see('Please'));
          // console.log('result2:', result2);
          //console.log(__dirname);
          // var mypath = path.join(__dirname, 'test.txt');
          // const content = 'National Applications Designer';
          // try {
          //     const data = fs.writeFileSync(mypath, content)
          //         //file written successfully
          // } catch (err) {
          //     console.error(err)
          // }
          // I.amOnPage('/plugins');
          // try {
          //     read_data = fs.readFileSync(mypath, 'utf8')
          //     console.log(read_data);
          // } catch (err) {
          //     console.error(err)
          // }
          // I.click('div.right-menu > div.header-project-switch > button');
          // I.fillField('.ant-input', read_data);
          // I.click('div > div > div > div > div.menu-project-item-text > h3');
          // I.wait(2);
          console.log(__dirname);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});