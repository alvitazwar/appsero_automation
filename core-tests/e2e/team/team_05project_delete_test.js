Feature('Appsero');
const locator = require('./team_locator_test');
const create_team = require('./team_01create_test');
var project_delete = create_team.team_name;
Scenario('Team project delete', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/teams');
    I.click(project_delete);
    //I.click('Automated Team');
    I.wait(2);
    I.click(locator.projectmenu);
    I.usePuppeteerTo('Handle SVG action', async({ page, browser }) => {
        I.wait(3);
        const svg = await page.waitForSelector(locator.projectsvgcheck);
        await svg.hover();
        await page.waitForSelector(locator.removebtn);
        //await page.click(locator.removebtn);
        //I.click('Remove');

    })
    I.forceClick(locator.removebtn);
    I.forceClick('Yes');
    I.wait(2);
}).tag('@team');