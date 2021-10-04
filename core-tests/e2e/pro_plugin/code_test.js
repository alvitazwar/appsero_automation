Feature('All the test codes are held');
var slugify = require('slugify');
var faker = require('faker');
const puppeteer = require('puppeteer');
const locator = require('./../analytics/analytics_locator_test');

// Scenario('Experiment ZOne', async({ I, loginAs }) => {
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
Scenario('Check I see Return', async({ I, loginAs }) => {
    let result;
    loginAs('admin_new');
    I.amOnPage('/plugins');
    // try {
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
    const result1 = await tryTo(() => I.see('Plugins'));
    console.log('result1:', result1);
    const result2 = await tryTo(() => I.see('Please'));
    console.log('result2:', result2);


});