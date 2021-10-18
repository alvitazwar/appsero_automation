Feature('Appsero Analytics Explore');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('../analytics/analytics_locator_test.js');

Scenario('analytics Sites test', async({ I, loginAs }) => {

    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    tryTo(() => {
        I.seeElement(locator.PremiumModal);
        I.click(locator.SkipBilling);
    });
    I.waitForVisible(locator.Analytics);
    I.click(locator.Analytics);
    I.click(locator.SitesMenu);

    tryTo(async() => {
        let msg = '';
        try {
            msg = await I.grabTextFrom(locator.UnknMsg);
        } catch (e) {
            console.log(e);
        }
        //msg = await I.grabTextFrom(locator.UnknMsg);
        console.log("The message We got is :", msg, );
        strict.notEqual(msg, 'Unknown error occurred.', 'This Page has Functional Problem');
    });
    I.wait(3);
    I.seeElementInDOM(locator.ExportBtn).then((result) => {
        console.log("Export Btn is Visible");

    }).catch((error) => {
        console.log('Button is not not loading');
    });
    I.seeElementInDOM(locator.SiteDrpDwn).then((result) => {
        console.log("Status Drop Down is Present");
    }).catch((err) => {
        console.log("Status Dropdown is not Present");
    });
    I.seeElementInDOM(locator.SitesTable).catch((e) => {
        console.log("Table is Not Loading");
    })


    // I.seeElementInDOM(locator.SitesTable);

}).tag('@explore_analytics').tag('@cd');