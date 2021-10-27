Feature('Appsero');
const locator = require('./settings_locator_test');
Scenario('edit price_regular ', async({ I, loginAs }) => {
    loginAs('admin');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.settingsmenu);
    I.click(locator.pricingsubmenu);
    //I.click(locator.activitionlimit);
    I.fillField(locator.activitionlimit, '200');
    I.fillField(locator.productprice, '220');
    //I.selectOption('')
    I.click('Submit');
    I.see('Variations has been updated.');
}).tag('@settings');
//email_05_pause_test.js