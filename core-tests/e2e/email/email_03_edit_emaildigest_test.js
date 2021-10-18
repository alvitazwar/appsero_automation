var Factory = require('rosie');
var faker = require('faker');
const locator = require('./email_locator_test.js');
Feature('Appsero');

Scenario('@email edit email digest', async({ I, loginAs }) => {
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
        const btn = await page.waitForXPath(locator.Editbtn);
        await btn.click();
        //I.click('Remove');
    })

    I.see('Send To');
    I.fillField('Send To', faker.internet.email());
    I.click(locator.Frequency);
    I.click(locator.FrequencyMonthly);
    I.click(locator.SendOn);
    I.click(locator.SendOn7th);
    let name = '';
    name = faker.name.title();
    I.fillField('Digest Name', name);
    I.click('Submit');
    I.see(name);
    I.see('Email digest updated successfully.');
    I.say('Edit Successfull');

}).tag('@email');