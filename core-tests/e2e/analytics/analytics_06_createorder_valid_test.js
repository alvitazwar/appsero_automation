Feature('Appsero Analytics Functional Test');
var Factory = require('rosie');
var faker = require('faker');
const locator = require('./analytics_locator_test.js');
Scenario('@analytics create order valid', async({ I, loginAs }) => {
    loginAs('admin');
    I.amOnPage('/plugins');
    I.Selectplugin();
    const check_sales = await tryTo(() => I.click(locator.Sales));
    console.log('Premium Status', check_sales);
    if (check_sales == false) {
        console.log('User needs to buy license to use this feature')
    } else {
        I.wait(1);
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
    }


}).tag('@analytics');