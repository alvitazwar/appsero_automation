Feature('Appsero');
const locator = require('./settings_locator_test');
Scenario('@settings edit License ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.settingsmenu);
    I.click(locator.licensingsubmenu);

    I.click('Update Licensing');
    I.see('Settings has been updated.');



}).tag('@settings');
//email_05_pause_test.js