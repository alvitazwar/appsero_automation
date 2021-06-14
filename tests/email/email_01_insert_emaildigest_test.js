var Factory = require('rosie');
var faker = require('faker');
const helper = require('./helpers');
Feature('Appsero');

Scenario('@email insert email digest valid', async({ I }) => {
    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.click('envato plg test');
    I.click('Email');
    I.amOnPage('/plugins/envato-plg-test/email-digest');
    I.click('Add Email Digest');
    I.fillField('Send To', helper.range(8, () => faker.internet.email()).join(','));
    I.click('//*[@id="frequency"]/div/div');
    I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[2]');
    I.click('//*[@id="send_on"]/div/div');
    I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[5]');
    I.fillField('Digest Name', 'Test automation');
    I.click('Submit');
    I.see('Test automation');

}).tag('@email');