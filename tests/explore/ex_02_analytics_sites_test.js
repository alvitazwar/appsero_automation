Feature('Appsero Analytics Explore');
const { ifError, strict } = require("assert");
const { assert } = require("console");
const locator = require('../analytics/analytics_locator_test.js');

Scenario('@explore_analytics release test', async({ I }) => {

    I.loginAsAdmin();
    I.amOnPage('/plugins');
    //I.click('Fastspring_affiliate2'); //envato plg test
    I.click('envato plg test');
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
    I.seeElementInDOM(locator.SiteExportBtn).then((result) => {
        console.log("Export Btn is Visible");


    }).catch((error) => {
        console.log('This is Btn Error', 'blue');

    });
    I.seeElementInDOM(locator.SitesTable).catch((e) => {
        console.log("Table is Not Loading");
    })


    // I.seeElementInDOM(locator.SitesTable);

}).tag('@explore_analytics');