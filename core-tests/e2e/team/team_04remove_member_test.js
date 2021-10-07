Feature('Appsero');
const locator = require('./team_locator_test');
Scenario('Team remove team member', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/teams');
    I.click('Automated Team');
    I.moveCur('#app > section > section > main > div > div.member-inner-page.page-content > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.mr-8.ml-auto > a > i');
    I.wait(2);
    I.click('Remove');
    I.click('Yes');
    //I.pressKey("Enter");
    I.dontSee('Saif');
}).tag('@team');