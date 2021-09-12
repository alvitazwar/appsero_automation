var faker = require('faker');
Feature('test upload');
Scenario('upload file', async({ I }) => {
    I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
    I.fillField('Username', 'demo');
    I.fillField('Password', 'demo');
    I.click('Log In');
    I.click('#rtm_show_upload_ui');
    // I.usePuppeteerTo('upload action', async({ page, browser }) => {
    //     const [fileChooser] = await Promise.all([
    //         page.waitForFileChooser(),
    //         page.click('#rtMedia-upload-button')
    //     ])
    //     await fileChooser.accept(['data/img.png']);
    //     await page.waitForSelector('#drag-drop-area > input');
    //     await page.click('#drag-drop-area > input');
    //     await page.waitForTimeout(5000);
    // }).then(console.log("file Uploaded successfully"));

    I.ImageUpload();
    I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
    I.wait(4);

});