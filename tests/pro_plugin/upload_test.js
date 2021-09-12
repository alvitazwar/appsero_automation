var faker = require('faker');
Feature('test upload');
Scenario('upload file', async({ I }) => {
    I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
    I.fillField('Username', 'demo');
    I.fillField('Password', 'demo');
    I.click('Log In');
    I.click('#rtm_show_upload_ui');
    I.ImageUpload();
    I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
    I.wait(4);

});