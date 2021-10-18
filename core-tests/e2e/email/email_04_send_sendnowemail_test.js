var Factory = require('rosie');
var faker = require('faker');
const locator = require('./email_locator_test.js');
const puppeteer = require('puppeteer');
const expect = require('chai').expect
Feature('Appsero');
Scenario('@email send now email digest ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.waitForVisible(locator.EmailDigest);
    I.click(locator.EmailDigest);
    I.usePuppeteerTo('Handle SVG action', async({ page, browser }) => {
        //await page.waitForSelector(locator.svgicon);

        const svg = await page.waitForSelector(locator.svgicon);
        await svg.hover();
        I.wait(3);
        await page.waitForSelector(locator.SendNowbtn);
    })
    I.forceClick(locator.SendNowbtn);
    I.wait(3);
    var msg = 'Mail has been sent successfully.';
    I.see(msg);

}).tag('@email');