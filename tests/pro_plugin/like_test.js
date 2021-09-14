var faker = require('faker');
Feature('test like');
Scenario('like', async({ I }) => {
    I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
    I.fillField('Username', 'demo');
    I.fillField('Password', 'demo');
    I.click('Log In');
    I.click('//*[@id="1712"]/a/div[1]/img');
    I.forceClick('div.rtmedia-item-comments > div.rtmedia-actions-before-comments.clearfix > div > span > form > button').then(console.log('liked media successfully'));
    // I.see('Unlike');


});