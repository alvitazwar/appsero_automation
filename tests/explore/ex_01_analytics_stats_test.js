Feature('Appsero Analytics Explore');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('../analytics/analytics_locator_test.js');

Scenario('analytics Stats test', async({ I }) => {

    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.click('Fastspring_affiliate2');
    //I.click('envato plg test'); //envato plg test

    tryTo(() => {
        I.seeElement(locator.PremiumModal);
        I.click(locator.SkipBilling);
    });


    I.waitForVisible(locator.Analytics);
    I.click(locator.Analytics);
    I.click(locator.StatsMenu);
    //I.click(locator.SitesMenu);

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

    I.seeElementInDOM(locator.MainContentAnalytics);
    I.seeElementInDOM(locator.SkippedUser);
    I.seeElementInDOM(locator.Deactivation);
    I.seeElementInDOM(locator.MySqlVersion);


}).tag('@explore_analytics').tag('@ab');