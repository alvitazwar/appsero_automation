Feature('Appsero Analytics Functional Test');
const locator = require('./analytics_locator_test.js');
Scenario('@analytics create order invalid', async({ I, loginAs }) => {
    loginAs('admin');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.Sales);
    I.click(locator.Orders);
    I.click('Create Order');
    I.fillField('Customer Name', 'Automated');
    I.fillField('Customer Email', 'customer@gmail.com');
    I.fillField('Customer Phone', 'asvaa');
    I.fillField('Price', 'asda');
    I.fillField('Discount', 'abed');
    I.click('Submit');
    I.see('The price must be a number.');
    I.see('The discount must be a number.');
    I.say('Validated properly');

}).tag('@analytics');