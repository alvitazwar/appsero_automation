Feature('Appsero');
const locator = require('./team_locator_test');
const create_team = require('./team_01create_test');
var team_choose = create_team.team_name;
Scenario('Team add project', async({ I, loginAs }) => {
    loginAs('admin');
    I.amOnPage('/teams');
    I.click(team_choose);
    I.waitForElement(locator.projectmenu, 30);
    I.click(locator.projectmenu);
    I.waitForClickable(locator.addproject);
    I.click(locator.addproject);
    I.fillField(locator.inputaddproject, 'qq');
    I.pressKey("Enter");
    I.see('Project Added Successfully.');
    //I.refreshPage();
    I.see('qq');
}).tag('@team');