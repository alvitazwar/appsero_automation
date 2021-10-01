Feature('Appser_Accounts');
const locator = require('./accounts_locator_test');
Scenario('@accountcheck', async({ I, loginAs }) => {
    //loginAs('admin_staging');
    I.amOnPage('/');
    I.click(locator.apikeymenu);
    I.click(locator.createapibutton);
    I.see('Not connected');
}).tag('@accounts');