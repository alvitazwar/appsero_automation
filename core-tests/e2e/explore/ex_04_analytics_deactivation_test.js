Feature('Appsero Analytics Explore');
const { ifError, strict } = require("assert");
const { assert, Console } = require("console");
const locator = require('../analytics/analytics_locator_test.js');

Scenario('analytics Deactivation test', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    tryTo(() => {
        I.seeElement(locator.PremiumModal);
        I.click(locator.SkipBilling);
    });


    I.waitForVisible(locator.Analytics);
    I.click(locator.Analytics);
    I.click(locator.DeactMenu);


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
    I.wait(5);
    I.seeElementInDOM(locator.ExportBtn).then((result) => {
        console.log("Export Btn is Visible");


    }).catch((error) => {
        console.log('Button is not loading', error);

    });
    I.seeElementInDOM(locator.DeactFilter).then((result) => {
        console.log("Filter is Present");

    }).catch((err) => {
        console.log("Filter is not Present");
    });
    I.seeElementInDOM(locator.DeactChart).then((result) => {
        console.log("Chart is Visible");

    }).catch((err) => {
        console.log("Chart is Not Loading")
    });
    I.seeElementInDOM(locator.DeactTable).then((result) => {
        console.log("Details Table is Visible");

    }).catch((err) => {
        console.log("Details Table is Not Loading")
    });


}).tag('@explore_analytics');