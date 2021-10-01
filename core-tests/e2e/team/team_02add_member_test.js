const puppeteer = require('puppeteer');
Feature('Appsero');
const locator = require('./team_locator_test');
Scenario('Team add team member', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/teams');
    I.click('Automated Team');
    // I.refreshPage();
    I.click('Add Members');
    I.fillField('User Email', 'saif@wphive.com');
    I.click(locator.memeberolediv);
    I.click(locator.developerrole);
    //I.selectOption('Role', 'manager');
    I.click('Submit');
    //I.pressKey("Enter");
    I.see('Member Added Successfully');
}).tag('@team');