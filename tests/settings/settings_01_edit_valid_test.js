Feature('Appsero');
const locator = require('./settings_locator_test');
Scenario('@settings edit valid ', async({ I, loginAs }) => {
    loginAs('admin_staging');
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