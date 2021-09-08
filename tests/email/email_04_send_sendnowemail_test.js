var Factory = require('rosie');
var faker = require('faker');
const locator = require('../email/email_locator_test.js');
Feature('Appsero');
Scenario('@email send now email digest ', async({ I }) => {
    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.waitForVisible(locator.EmailDigest);
    I.click(locator.EmailDigest);
    I.moveCursorTo(locator.svgicon);
    I.forceClick(locator.SendNowbtn);
    I.wait(2);
    var msg = 'Mail has been sent successfully.';
    I.see(msg);

}).tag('@email');