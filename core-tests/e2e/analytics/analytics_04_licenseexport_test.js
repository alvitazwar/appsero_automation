Feature('Appsero Analytics Functional Test');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('./analytics_locator_test.js');

Scenario('@analytics licenses Export', async({ I, loginAs }) => {
    loginAs('admin');
    I.amOnPage('/plugins');
    I.Selectplugin();
    const check_license = await tryTo(() => I.forceClick('Licenses'));
    console.log(check_license);
    if (check_license == false) {
        console.log('User needs to buy license to use this feature')
    } else {
        I.wait(2);
        I.click('Export');
        I.click('Sync');
        I.click('Yes');
    }


    //I.see('Sync started successfully. You will get an email upon completion');
    I.wait(3);
}).tag('@analytics');;