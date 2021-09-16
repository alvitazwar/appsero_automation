Feature('Appsero Accounts');
const locator = require('./accounts_locator_test');
Scenario('@accounts api delete ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.click(locator.apikeymenu);
    I.click(locator.createapibutton);
    I.see('Not connected');
    I.click(locator.firstdelete);
    I.click('Yes');
    I.see('API Key Deleted Successfully.');




}).tag('@accounts');