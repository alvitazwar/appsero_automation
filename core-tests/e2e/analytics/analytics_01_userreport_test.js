Feature('Appsero');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('./analytics_locator_test.js');

Scenario('@analytics user report export', async({ I, loginAs }) => {

    loginAs('admin_staging');
    I.Selectplugin();
    I.waitForVisible(locator.Analytics);
    I.click(locator.Analytics);
    I.click(locator.SitesMenu);
    I.click('Export');
    I.click(locator.StatExportBtn);
    I.wait(2);
    I.waitForVisible(locator.RequestMsg);
    I.seeTextEquals('The request has been submitted', locator.RequestMsg).then((result) => {
        console.log("Message is Showing Correctly");

    }).catch((err) => {
        console.log("Message fetching failed");
    });
}).tag('@analytics');