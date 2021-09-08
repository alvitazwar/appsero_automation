Feature('Appsero');
const { ifError, strict } = require("assert");
const { assert } = require("console");
Scenario('@code export', async({ I }) => {
    I.loginAsAdminProduction();
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