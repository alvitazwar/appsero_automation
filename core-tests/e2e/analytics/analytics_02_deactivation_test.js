Feature('Appsero Analytics Functional Test');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('./analytics_locator_test.js');

Scenario('@analytics deactivations report export', async({ I, loginAs }) => {
    loginAs('admin');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.waitForVisible(locator.Analytics, 5);
    I.click(locator.Analytics);
    I.click(locator.DeactMenu);
    I.click('Export');
    const result = await I.check_analytics_premium();
    if (result == true) {
        console.log('Buy license To use this premium Feature')
    } else {
        I.usePuppeteerTo('button', async({ page, browser }) => {
            await page.waitForSelector('div > div.ant-modal-content > div > div.mb-8 > label > span.ant-checkbox > input');
            const checkbox_theme = await page.$('div > div.ant-modal-content > div > div.mb-8 > label > span.ant-checkbox > input');
            let initial_val = await (await checkbox_theme.getProperty('checked')).jsonValue()
            console.log('initial state', initial_val);
            if (initial_val == false) {
                await checkbox_theme.click();
            }

            console.log('after the click the value', await (await checkbox_theme.getProperty('checked')).jsonValue());
        })
        I.wait(4);
    }

}).tag('@analytics');