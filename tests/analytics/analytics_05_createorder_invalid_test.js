Feature('Appsero');
const locator = require('../analytics/analytics_locator_test.js');
Scenario('@analytics create order invalid', async({ I }) => {
    I.loginAsAdmin();
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
    I.see('Unknown error occurred.');
    I.say('Not Validate properly');

}).tag('@analytics');