Feature('Appsero');
const locator = require('./team_locator_test');
Scenario('Team remove team member', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/teams');
    I.click('Automated Team');
    I.wait(2);
    //I.waitForClickable('svg > circle:nth-of-type(4)');
    //I.refreshPage();
    I.usePuppeteerTo('Handle SVG action', async({ page, browser }) => {
        I.wait(3);
        await page.waitForSelector(locator.membersvgcheck);
        await page.hover(locator.membersvgcheck);
        await page.waitForSelector(locator.removebtn);
        await page.click(locator.removebtn);
        //I.click('Remove');
        I.click('Yes');
    })
    I.wait(2);
    //I.see('Removed Successfully.');
}).tag('@team');