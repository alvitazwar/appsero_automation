const locator = require('./email_locator_test.js');
const puppeteer = require('puppeteer');
const expect = require('chai').expect
Feature('Appsero');
Scenario('@email pause-active function ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.waitForVisible(locator.EmailDigest);
    I.click(locator.EmailDigest);
    I.usePuppeteerTo('Handle SVG action', async({ page, browser }) => {
        I.wait(3);
        const svg = await page.waitForSelector(locator.svgicon);
        await svg.hover();
        const btn = await Promise.race([
            page.waitForXPath(locator.PauseBtn),
            page.waitForXPath(locator.ActiveBtn)
        ]);
        await btn.click();
        await page.waitForSelector(locator.alertmsg, 40);
        const msg = await page.$eval(locator.alertmsg, ele => ele.textContent);
        expect(msg).to.be.a('string', 'Status updated successfully.');

    })





}).tag('@email');
//email_05_pause_test.js