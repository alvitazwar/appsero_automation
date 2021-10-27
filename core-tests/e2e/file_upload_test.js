const puppeteer = require('puppeteer');
Feature('File Upload Test');

Scenario('Upload a file in Appsero', async({ I, loginAs }) => {
    const browser = await puppeteer.launch({
        "headless": false,
        "slowMo": 50
    });
    const page = await browser.newPage();
    loginAs('admin');
    I.amOnPage('/plugins');
    I.click('FastSpring_License_subs');
    I.click('Releases');
    I.click('Create a New Release');
    I.fillField('Version', '1.1');
    I.click('#release_date > div > input');
    I.click('Today', 'div > div.ant-calendar-date-panel > div.ant-calendar-footer > span > a');
    I.fillField('Changelog', 'Test New File upload');
    I.checkOption(' div.ant-modal-content > div.ant-modal-footer > div > label > span.ant-checkbox > input');
    // I.waitForEnabled('div.ant-col.ant-form-item-control-wrapper > div > span > span > div > span > button');
    // I.waitForClickable('div.ant-col.ant-form-item-control-wrapper > div > span > span > div > span > button');
    I.attachFile('div.ant-col.ant-form-item-control-wrapper > div > span > span > div > span > button', 'data/fastspring_license_subs.zip');
    I.wait(3);
    const [fileChooser] = await Promise.all([
        page.waitForFileChooser(),
        page.click('span[role="button"] > .ant-btnspan[role="button"] > .ant-btn')
    ])
    await fileChooser.accept(['data/fastspring_license_subs.zip'])
    await browser.close();
});