Feature('Appsero');
const { ifError, strict } = require("assert");
const { assert } = require("console");
//const locator = require('../analytics/analytics_locator_test.js');

Scenario('@code export', async({ I }) => {
    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.click('bizon_paddle');
    I.click('Integrate Appsero SDK.');
    I.scrollTo('div > div > div > h2.mt-30');
    let msg = '';
    msg = await I.grabTextFrom('#user_guide_with_license');
    console.log(msg);

});