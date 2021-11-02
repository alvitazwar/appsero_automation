Feature('Appsero Analytics Functional Test');
const locator = require('./analytics_locator_test.js');
Scenario('@analytics Edit License', async({ I, loginAs }) => {
    loginAs('admin');
    I.amOnPage('/plugins')
    I.Selectplugin();
    const check_lise = await tryTo(() => I.forceClick('Licenses'));
    console.log('Premium Status', check_lise);
    if (check_lise == false) {
        console.log('User needs to buy license to use this feature')
    } else {
        I.wait(1);
        I.click(locator.SelectLicense);
        I.click('Edit');
        //Calendar Access
        I.click(locator.CalenderInput);
        //I.forceClick('//div[4]/div/div/div/div/div[1]/div/input');
        I.click(locator.CalenderDate);
        I.fillField(locator.activitionlimit, '5');
        I.click(locator.CalenderBtn);
        I.see('Updated successfully.');
    }

}).tag('@analytics');