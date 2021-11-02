Feature('Appsero Analytics Functional Test');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('./analytics_locator_test.js');
Scenario('@analytics customer export', async({ I, loginAs }) => {

    loginAs('admin');
    I.amOnPage('/plugins');
    I.Selectplugin();
    const check_sales = await tryTo(() => I.click(locator.Sales));
    console.log('Premium Status', check_sales);
    if (check_sales == false) {
        console.log('User needs to buy license to use this feature')
    } else {
        I.wait(1);
        I.forceClick(locator.Customer);
        I.waitForClickable(locator.CustomerExportBtn)
        I.forceClick(locator.CustomerExportBtn);
        I.waitForVisible(locator.RequestMsg, 5);
        I.seeTextEquals('The request has been submitted', locator.RequestMsg).then((result) => {
            console.log("Message is Showing Correctly");
        }).catch((err) => {
            console.log("Message fetching failed");
        });
        I.wait(2);

    }

}).tag('@analytics');;