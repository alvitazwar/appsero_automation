Feature('Appsero');
const locator = require('./settings_locator_test');
const faker = require('faker');
Scenario('@settings edit invalid ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.settingsmenu);
    I.click(locator.editsubmenu);
    I.fillField('//*[@id="version"]', faker.random.alphaNumeric(19));
    I.click('Update Plugin');
    I.see('The version may not be greater than 18 characters.');
    I.clearField('//*[@id="version"]');
    I.fillField('//*[@id="version"]', '1.2');
    I.click('//*[@id="php"]/div/div');
    I.clearField('//*[@id="php"]');
    I.click('//*[@id="requires"]/div/div');
    I.clearField('//*[@id="requires"]');
    I.click('//*[@id="tested"]/div/div');
    I.clearField('//*[@id="tested"]');
    // I.fillField('//*[@id="homepage"]/div/div');
    // I.clearField('//*[@id="homepage"]');
    // I.clearField('//*[@id="demo"]');
    I.click('Update Plugin');
    //I.see('Please fill up all the fields correctly.');

}).tag('@settings');
//email_05_pause_test.js