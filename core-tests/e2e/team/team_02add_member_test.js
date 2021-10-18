const puppeteer = require('puppeteer');
Feature('Appsero');
const locator = require('./team_locator_test');
const create_team = require('./team_01create_test');
var select_team = create_team.team_name;
Scenario('Team add team member', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/teams');
    I.click(select_team);
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