var Factory = require('rosie');
var faker = require('faker');
const helper = require('./helpers');
const locator = require('./email_locator_test.js');
Feature('Appsero');

Scenario('@email insert email digest valid', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.waitForVisible(locator.EmailDigest);
    I.click(locator.EmailDigest);
    I.click('Add Email Digest');
    I.fillField('Send To', helper.range(5, () => faker.internet.email()).join(','));
    I.click(locator.Frequency);
    I.click(locator.FrequencyWeekly);
    I.click(locator.SendOn);
    I.click(locator.SendOnFriday);
    I.fillField('Digest Name', faker.name.title());
    I.click('Submit');
    I.see('Email digest created successfully.');

}).tag('@email');