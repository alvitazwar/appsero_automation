Feature('Appsero');
const { default: waitForDisplayed } = require('webdriverio/build/commands/element/waitForDisplayed');
const locator = require('./team_locator_test');
const create_team = require('./team_01create_test');
var remove_member = create_team.team_name;
Scenario('Team remove team member', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/teams');
    //I.click('Dynamic Directives Representative'); // Principal Solutions Coordinator
    I.click(remove_member);
    I.wait(2);

    I.usePuppeteerTo('Handle SVG action', async({ page, browser }) => {
        //I.wait(2);
        const svg = await page.waitForSelector(locator.membersvgcheck);
        //await page.waitFor(3000);
        await svg.hover();
        await page.waitForSelector(locator.removebtn);
        //await page.click(locator.removebtn);
        //I.click('Remove');
        //I.click('Yes');
    })
    I.forceClick(locator.removebtn);
    I.forceClick('Yes');
    I.wait(2);
    I.see('Removed Successfully.');
}).tag('@team');