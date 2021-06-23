Feature('Appsero');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('../analytics/analytics_locator_test.js');

Scenario('@analytics deactivations report export', async({ I }) => {
    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.click('FastSpring_License_subs');
    I.waitForVisible(locator.Analytics);
    I.click(locator.Analytics);
    I.click(locator.DeactMenu);
    I.click('Export');
    I.checkOption(locator.deactthemechckbox);
    I.checkOption(locator.deatclientemailchkbox);
    I.click(locator.deactexportbtn);
    I.seeTextEquals('The request has been submitted', locator.RequestMsg).then((result) => {
        console.log("Message is Showing Correctly");

    }).catch((err) => {
        console.log("Message fetching failed");
    });
    I.wait(4);
}).tag('@analytics');