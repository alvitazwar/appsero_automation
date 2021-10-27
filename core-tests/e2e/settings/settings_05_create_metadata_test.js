Feature('Appsero');
const locator = require('./settings_locator_test');
Scenario('@settings create metadata ', async({ I, loginAs }) => {
    loginAs('admin');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.settingsmenu);
    I.click(locator.metadatasubmenu);
    I.metadataCreate();
    //I.fillField('Name','Automated metadata');
    I.click(locator.selectdropdown);
    I.click(locator.get_value());
    I.click('Add Field');
    I.see('Meta Field Added successfully.');
}).tag('@settings');