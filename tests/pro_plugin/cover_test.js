var faker = require('faker');
Feature('cover');
Scenario('photo', async({ I }) => {
    I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
    I.fillField('Username', 'demo');
    I.fillField('Password', 'demo');
    I.click('Log In');
    I.click('#user-xprofile');
    I.click('#change-cover-image');
    I.usePuppeteerTo('upload action', async({ page, browser }) => {
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click('#bp-browse-button')
        ])
        await fileChooser.accept(['data/img.png']);
        // await page.waitForSelector('#drag-drop-area > input');
        // await page.click('#drag-drop-area > input');
        await page.waitForTimeout(5000);
    })
    let msg = 'Your new cover image was uploaded successfully.';
    let get_message = I.grabTextFrom('#bp-cover-image-feedback');
    if (get_message == msg) {
        console.log('file is updated successfully');
    }


})