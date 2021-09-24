Feature('All the test codes are held');
var slugify = require('slugify');
var faker = require('faker');
const puppeteer = require('puppeteer');
const locator = require('./../analytics/analytics_locator_test');
Scenario('Experiment ZOne', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.waitForVisible(locator.Analytics);
    I.click(locator.Analytics);
    I.click(locator.DeactMenu);
    I.click('Export');
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


})