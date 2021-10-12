var Factory = require('rosie');
var faker = require('faker');
const locator = require('./email_locator_test.js');
Feature('Appsero');
Scenario('@email send now email digest ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.waitForVisible(locator.EmailDigest);
    I.click(locator.EmailDigest);
    I.usePuppeteerTo('Handle SVG action', async({ page, browser }) => {
            I.wait(3);
            //await page.waitForSelector(locator.svgicon);
            const svg = await page.waitForSelector(locator.svgicon);
            await svg.hover();
            const btn = await page.waitForSelector(locator.SendNowbtn);
            await btn.click();
            //I.click('Remove');
        })
        //I.click(locator.EmailDigest);
        // I.moveCursorTo(locator.svgicon);
        // I.forceClick(locator.SendNowbtn);
    I.wait(2);
    var msg = 'Mail has been sent successfully.';
    I.see(msg);

}).tag('@email');