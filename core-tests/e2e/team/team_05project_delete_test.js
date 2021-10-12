Feature('Appsero');
const locator = require('./team_locator_test');
Scenario('Team project delete', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/teams');
    I.click('Automated Team');
    I.wait(2);
    //I.click('//*[@id="app"]//main//div[2]/div[2]/div//div[3]/a');
    //I.waitForElement('/html/body/div[3]/div/div/ul/li/span',30);
    I.click(locator.projectmenu);
    I.usePuppeteerTo('Handle SVG action', async({ page, browser }) => {
        I.wait(3);
        await page.waitForSelector(locator.projectsvgcheck);
        await page.hover(locator.projectsvgcheck);
        await page.waitForSelector(locator.removebtn);
        await page.click(locator.removebtn);
        //I.click('Remove');
        I.click('Yes');
    })
    I.wait(2);
}).tag('@team');