Feature('Appsero');
var Factory = require('rosie');
var faker = require('faker');
const locator = require('../analytics/analytics_locator_test.js');
Scenario('@analytics create order valid', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.Sales);
    I.click(locator.Orders);
    I.click('Create Order');
    I.fillField('Customer Name', faker.name.firstName());
    I.fillField('Customer Email', faker.internet.email());
    I.fillField('Customer Phone', '2321');
    I.fillField('Price', '100');
    I.fillField('Discount', '0');
    I.click('Submit');
    I.wait(2);
    I.see('Order created Successfully');

}).tag('@analytics');