Feature('Appsero');
const locator = require('./team_locator_test');
Scenario('Team add project', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/teams');
    I.click('Automated Team');
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