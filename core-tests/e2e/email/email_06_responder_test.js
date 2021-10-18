var Factory = require('rosie');
var faker = require('faker');
const locator = require('./email_locator_test.js');
const helpers = require('./helpers.js');
Feature('Appsero');
Scenario('@email Responder function valid ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.click(locator.AutoResponder);
    tryTo(async() => {
        helpers.enablefuntion();
    });
    I.click(locator.SwitchBtn);
    I.wait(2);
    //I.see('Deactivation auto responder disabled successfully');
}).tag('@email');
//email_05_pause_test.js