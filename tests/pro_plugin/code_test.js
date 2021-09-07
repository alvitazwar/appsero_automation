Feature('Appsero');
const { ifError, strict } = require("assert");
const { assert } = require("console");
//const locator = require('../analytics/analytics_locator_test.js');

// Scenario('@code export', async({ I }) => {
//     I.loginAsAdmin();
//     I.amOnPage('/plugins');
//     I.click('bizon_paddle');
//     I.click('Integrate Appsero SDK.');
//     I.scrollTo('div > div > div > h2.mt-30');
//     let msg = '';
//     msg = await I.grabTextFrom('#user_guide_with_license');
//     console.log(msg);

// });
Scenario('test', async({ I }) => {
    I.loginAsAdmin();
    for (let i = 0; i <= 7; i++) {
        await console.log('step number', i);
        if (i % 2 == 0) {
            I.click('//li[2]/a[@href="/plugins"]');
            I.see('Plugins');
            I.click('Add Plugin');
            I.click('.custom-button.mr-16.premium');
            I.metadataPlugin();
            I.metadataVersion();
            I.metadataPHP();
            I.metadataWordpress();
            I.metadataTested();
            I.click('Next');
            I.click('Next');
            I.click('Yes');
        } else {
            I.say("loop not exectued");
        }
    }


});