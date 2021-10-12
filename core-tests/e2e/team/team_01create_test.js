Feature('Appsero');
const account = require('./../accounts/accounts_locator_test');
const locator = require('./team_locator_test');
const faker = require('faker');
var team_name = faker.name.title();
module.exports = { team_name: team_name }
Scenario('Team create', async({ I, loginAs }) => {
    loginAs('admin_staging');

    I.click(account.profilemenu);
    I.click('Teams');
    I.click('New Team');
    I.fillField('Team name', team_name);
    I.fillField('Team contact email', faker.internet.email());
    I.click('Create Team');
    I.click('No thanks. I will send invitations later');
    I.click(locator.closesvg);
    I.amOnPage('/teams');
    I.see(team_name);

}).tag('@team');