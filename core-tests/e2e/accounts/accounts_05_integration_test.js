const locator = require('./accounts_locator_test');
Feature('Appsero Accounts');
Scenario('@accounts Integration', async({ I, loginAs }) => {
    loginAs('admin');
    I.amOnPage('/');
    I.click(locator.integrationmenu);
    I.seeElementInDOM(locator.mailchimpdiv);
    I.seeElementInDOM(locator.wemaildiv);
    I.seeElementInDOM(locator.mailjetdiv);
    I.seeElementInDOM(locator.envatodiv);
    I.seeElementInDOM(locator.githubdiv);
    I.seeElementInDOM(locator.bitbucketdiv);
    I.seeElementInDOM(locator.gitlabdiv);
    I.seeElementInDOM(locator.wordpressdiv);
    I.seeElementInDOM(locator.fastspringdiv);
    I.seeElementInDOM(locator.paddlediv);
    I.seeElementInDOM(locator.gumroadiv);
    I.seeElementInDOM(locator.helpscoutdiv).then((result) => {
        console.log('All elements are loaded successfully');
    });
}).tag('@accounts');