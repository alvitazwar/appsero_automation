Feature('Appsero');
const locator = require('./analytics_locator_test.js');
Scenario('@analytics Edit License', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins')
    I.Selectplugin();
    I.click(locator.LicenseMenu);
    I.click(locator.SelectLicense);
    I.click('Edit');
    //Calendar Access
    I.click(locator.CalenderInput);
    I.forceClick('//div[4]/div/div/div/div/div[1]/div/input');
    I.click(locator.CalenderDate);
    I.fillField(locator.activitionlimit, '5');
    I.click(locator.CalenderBtn);
    I.see('Updated successfully.');

}).tag('@analytics');