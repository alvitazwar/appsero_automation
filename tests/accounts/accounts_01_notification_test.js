const locator = require('./accounts_locator_test');
Feature('Appsero');

Scenario('@accounts Toggle Notification ', async({ I, loginAs }) => {

    loginAs('admin_staging');
    I.click(locator.profilemenu);
    I.click('Account');
    I.click('Notification Settings');
    I.click(locator.emailnotification);
    I.see(locator.msg);
    I.click(locator.emailnotification);
    I.see(locator.msg);
    I.click(locator.appseronoification);
    I.see(locator.msg);
    I.click(locator.appseronoification);
    I.see(locator.msg);

}).tag('@accounts');