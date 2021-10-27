var Factory = require('rosie');
var faker = require('faker');
const helper = require('./helpers');
const locator = require('./email_locator_test.js');

Feature('Appsero Email Functional Test');

Scenario('@email insert email digest Invalid', async({ I, loginAs }) => {
    loginAs('admin');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.waitForVisible(locator.EmailDigest);
    I.click(locator.EmailDigest);
    I.click('Add Email Digest');
    I.fillField('Send To', faker.internet.email() + '##');
    I.click(locator.Frequency);
    I.click(locator.FrequencyWeekly);
    I.click(locator.SendOn);
    I.click(locator.SendOnFriday);
    I.fillField('Digest Name', faker.name.title());
    I.click('Submit');
    I.see('send to emails are invalid.')
    I.say('Email Verification is okay');


}).tag('@email');