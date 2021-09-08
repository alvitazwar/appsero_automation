Feature('Appsero');
const locator = require('./accounts_locator_test');
Scenario('@accounts api delete ', async({ I }) => {
    I.loginAsAdmin();
    I.click(locator.apikeymenu);
    I.click(locator.createapibutton);
    I.see('Not connected');
    I.click(locator.firstdelete);
    I.click('Yes');
    I.see('API Key Deleted Successfully.');




}).tag('@accounts');