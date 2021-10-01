const locator = require('./email_locator_test.js');
Feature('Appsero');
Scenario('@email pause-active function ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.waitForVisible(locator.EmailDigest);
    I.click(locator.EmailDigest);
    I.moveCursorTo(locator.svgicon);
    tryTo(async() => {
        I.forceClick(locator.PauseBtn);
        I.wait(2);
        I.see('Status updated successfully.');
    });
    I.wait(3);
    I.moveCursorTo(locator.svgicon);
    I.forceClick(locator.ActiveBtn);
    I.wait(2);
    I.see('Status updated successfully.');

}).tag('@email');
//email_05_pause_test.js