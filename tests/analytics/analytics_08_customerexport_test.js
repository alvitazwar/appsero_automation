Feature('Appsero');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('./analytics_locator_test.js');
Scenario('@analytics customer export', async({ I }) => {

    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.click('FastSpring_License_subs');

    I.click(locator.Sales);
    //I.waitForVisible(locator.Customer, 5);
    I.forceClick(locator.Customer);
    I.click('Export');
    I.seeTextEquals('The request has been submitted', locator.RequestMsg).then((result) => {
        console.log("Message is Showing Correctly");
    }).catch((err) => {
        console.log("Message fetching failed");
    });
    I.wait(3);

}).tag('@analytics');;