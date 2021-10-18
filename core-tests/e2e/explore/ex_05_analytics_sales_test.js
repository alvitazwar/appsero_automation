Feature('Appsero Analytics Explore');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('../analytics/analytics_locator_test.js');

Scenario('Sales Explore test', async({ I, loginAs }) => {

    loginAs('admin_staging');
    I.Selectplugin();
    tryTo(() => {
        I.seeElement(locator.PremiumModal);
        I.click(locator.SkipBilling);
    });


    I.seeElementInDOM(locator.Sales);
    I.click(locator.Sales);
    I.click(locator.Overview);
    // I.click(locator.SitesMenu);

    tryTo(async() => {
        let msg = '';
        try {
            msg = await I.grabTextFrom(locator.UnknMsg);
        } catch (e) {

        }
        //msg = await I.grabTextFrom(locator.UnknMsg);
        console.log("The message We got is :", msg);
        strict.notEqual(msg, 'Unknown error occurred.', 'This Page has Functional Problem');
    });

    I.wait(3);
    //console.log(txt);

    I.seeElementInDOM(locator.Overview_Calender);
    I.seeElementInDOM(locator.MainContentAnalytics);
    I.seeElementInDOM(locator.Overview_Active_Sub);
    I.seeTextEquals('Renewal Orders', locator.Overview_Renewal_Order);

    //Go to Orders
    I.click(locator.Orders);
    I.wait(2);
    tryTo(async() => {
        let msg = '';
        try {
            msg = await I.grabTextFrom(locator.UnknMsg);
        } catch (e) {

        }
        //msg = await I.grabTextFrom(locator.UnknMsg);
        console.log("The message We got is :", msg);
        strict.notEqual(msg, 'Unknown error occurred.', 'This Page has Functional Problem');
    });
    I.seeElementInDOM(locator.MainContentAnalytics);
    I.seeElementInDOM(locator.Orders_Search);
    I.seeElementInDOM(locator.Orders_Create_btn);



}).tag('@explore_analytics').tag('@gg');