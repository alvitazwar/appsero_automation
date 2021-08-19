var Factory = require('rosie');
var faker = require('faker');
const locator = require('../email/email_locator_test.js');
const helpers = require('./helpers.js');
Feature('Appsero');
Scenario('@email Responder function valid ', async({ I }) => {
    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click(locator.EmailMenu);
    I.click(locator.AutoResponder);
    // tryTo(async() => {
    //     helpers.enablefuntion();
    //     
    // });
    //I.wait(3);
    //I.click(locator.SwitchBtn);
    // I.wait(2);
    // I.see('Deactivation auto responder disabled successfully');

    // var status = await I.grabCssPropertyFrom(locator.SwitchBtn);
    // I.grabValueFrom()
    console.log(status);



}).tag('@email');
//email_05_pause_test.js