Feature('Appsero');
const locator = require('./accounts_locator_test');
Scenario('@accounts api create ', async({ I }) => {
    I.loginAsAdmin();
    I.click(locator.apikeymenu);
    I.click(locator.createapibutton);
    I.see('Not connected');
}).tag('@accounts');