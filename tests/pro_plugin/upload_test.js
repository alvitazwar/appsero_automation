var faker = require('faker');
Feature('test upload');
Scenario('upload file', async({ I }) => {
    I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
    I.fillField('Username', 'demo');
    I.fillField('Password', 'demo');
    I.click('Log In');
    I.waitForClickable('#rtm_show_upload_ui', 3);
    I.click('#rtm_show_upload_ui');


    I.usePuppeteerTo('upload action', async({ page, browser }) => {
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click('#rtMedia-upload-button')
        ])
        await fileChooser.accept(['data/img1.jpeg', 'data/img2.png', 'data/img3.png', 'data/img4.png', 'data/img5.png']);
        await page.waitForSelector('#drag-drop-area > input');
        //await page.click('#drag-drop-area > input');
        I.click('#drag-drop-area > input').then((result) => {
            I.wait(10);
        }).catch((error) => {
            console.log(error);
        })
    });
    console.log('success');

    //I.ImageUpload();
    //I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
    //I.wait(2);



});