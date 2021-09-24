var Factory = require('rosie');
var faker = require('faker');
const locator = require('./email_locator_test.js');
Feature('Appsero');

Scenario('@email edit email digest', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.waitForVisible(locator.EmailDigest);
    I.click(locator.EmailDigest);
    I.moveCursorTo(locator.svgicon);
    I.forceClick(locator.Editbtn);
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