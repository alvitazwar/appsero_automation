Feature('Appsero');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('./analytics_locator_test.js');

Scenario('@analytics licenses Export', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.forceClick('Licenses');
    I.wait(2);
    I.click('Export');
    I.click('Sync');
    I.click('Yes');
    I.see('Sync started successfully. You will get an email upon completion');
    I.wait(3);
}).tag('@analytics');;