Feature('Appsero');
const locator = require('./settings_locator_test');
Scenario('@settings edit valid ', async({ I }) => {
    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.settingsmenu);
    I.click(locator.editsubmenu);
    I.metadataVersion();
    I.metadataPHP();
    I.metadataWordpress();
    I.metadataTested();
    I.click('Update Plugin');
    I.see('Plugin information has been updated.');
}).tag('@settings');