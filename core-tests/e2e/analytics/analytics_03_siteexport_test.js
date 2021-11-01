Feature('Appsero Analytics Functional Test');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('./analytics_locator_test.js');

Scenario('@analytics site report export', async({ I, loginAs }) => {

    loginAs('admin');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.waitForVisible(locator.Analytics);
    I.click(locator.Analytics);
    I.click(locator.SitesMenu);
    I.click('Export');
    I.wait(2);
    const result = await I.check_analytics_premium();
    if (result == true) {
        console.log('Buy license To use this premium Feature')
    } else {
        I.click(locator.SiteExportoggle);
        I.click(locator.SiteExportBtn);
        I.waitForVisible(locator.RequestMsg);
        I.seeTextEquals('The request has been submitted', locator.RequestMsg).then((result) => {
            console.log("Message is Showing Correctly");

        }).catch((err) => {
            console.log("Message fetching failed");
        });
    }

}).tag('@analytics');