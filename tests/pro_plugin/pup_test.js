const puppeteer = require('puppeteer');
Feature('puppetteeer');
// (async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://qa.rtcamp.net/members/demo/media/1651/');
//     await page.goto('https://staging.appsero.com');
//     // other actions...
//     await browser.close();
// });
Scenario('aTest', async({ I }) => {
    I.usePuppeteerTo('emulate offline mode', async({ page, browser }) => {
        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();
        // await page.goto('https://qa.rtcamp.net/members/demo/media/1651/');
        // await page.goto('https://staging.appsero.com');
        // // other actions...
        // await browser.close();
        await page.goto('https://qa.rtcamp.net/members/demo/media/album/');
        await page.$eval('#bp-login-widget-user-login', el => el.value = 'demo');
        await page.$eval('#bp-login-widget-user-pass', el => el.value = 'demo');
        await page.click('#bp-login-widget-submit');
        await page.goto('https://qa.rtcamp.net/members/demo/media/1651/');
        // I.fillField('Username', 'demo');
        // I.fillField('Password', 'demo');
        // I.click('Log In');
        // I.click('#rtm_show_upload_ui');
        await page.waitForSelector('#rtMedia-upload-button');


        // get the ElementHandle of the selector above
        const inputUploadHandle = await page.$('#rtMedia-upload-button');

        // prepare file to upload, I'm using test_to_upload.jpg file on same directory as this script
        // Photo by Ave Calvar Martinez from Pexels https://www.pexels.com/photo/lighthouse-3361704/
        let fileToUpload = 'data/img.png';

        // Sets the value of the file input to fileToUpload
        inputUploadHandle.uploadFile(fileToUpload);

        // doing click on button to trigger upload file
        await page.waitForSelector('#drag-drop-area > input');
        await page.evaluate(() => document.getElementById('#drag-drop-area > input').click());

        // wait for selector that contains the uploaded file URL
        // await page.waitForSelector('#upload-link');
        // await page.waitFor(5000);

        // // get the download URL
        // let downloadUrl = await page.evaluate(() => {
        //     return document.getElementById('upload-link').value;
        // });

        // // display the result on console
        // console.log({
        //     'file': fileToUpload,
        //     'download_url': downloadUrl
        // });

        // close the browser
        await browser.close();
    });

})