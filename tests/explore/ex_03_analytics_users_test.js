Feature('Appsero Analytics Explore');
const { ifError, strict } = require("assert");
const { assert, Console } = require("console");
const locator = require('../analytics/analytics_locator_test.js');

Scenario('analytics Users test', async({ I, loginAs }) => {

    loginAs('admin_staging');
    I.amOnPage('/plugins');
    // I.click('Fastspring_affiliate2'); //envato plg test
    I.click('FastSpring_License_subs');
    tryTo(() => {
        I.seeElement(locator.PremiumModal);
        I.click(locator.SkipBilling);
    });


    I.waitForVisible(locator.Analytics);
    I.click(locator.Analytics);
    I.click(locator.UserMenu);


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
        console.log('This is Btn Error');

    });
    I.seeElementInDOM(locator.StatusDrpDwn).then((result) => {
        console.log("Status Drop Down is Present");

    }).catch((err) => {
        console.log("Status Dropdown is not Present");
    });
    I.seeElementInDOM(locator.UserTable).then((result) => {
        console.log("Users Table is Visible");

    }).catch((err) => {
        console.log("Users Table is Not Loading")
    });


}).tag('@explore_analytics').tag('@ef');