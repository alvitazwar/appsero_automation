var Factory = require('rosie');
var faker = require('faker');
const helper = require('./helpers');
const locator = require('../email/email_locator_test.js');
Feature('Appsero');

Scenario('@email insert email digest valid', async({ I }) => {
    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.click('woo_retest');
    I.click(locator.EmailMenu);
    I.waitForVisible(locator.EmailDigest);
    I.click(locator.EmailDigest);
    I.click('Add Email Digest');
    I.fillField('Send To', helper.range(5, () => faker.internet.email()).join(','));
    I.click(locator.Frequency);
    I.click(locator.FrequencyWeekly);
    I.click(locator.SendOn);
    I.click(locator.SendOnFriday);
    I.fillField('Digest Name', 'Test automation');
    I.click('Submit');
    I.see('Test automation');

}).tag('@email');