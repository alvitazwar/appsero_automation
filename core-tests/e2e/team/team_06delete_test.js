Feature('Appsero');
const account = require('./../accounts/accounts_locator_test');
const locator = require('./team_locator_test');
const faker = require('faker');
const create_team = require('./team_01create_test');
var delete_team = create_team.team_name;
Scenario('Team  delete', async({ I, loginAs }) => {
    I.clearCookie();
    loginAs('admin');
    I.amOnPage('/teams');
    I.click(delete_team);
    I.click('Settings');
    I.click(locator.deleteteambtn);
    I.click(locator.deleteyes);
    //I.dontSee('Automated team');
}).tag('@team');