const puppeteer = require('puppeteer');
Feature('Appsero');
// const { ifError, strict } = require("assert");
// const { assert } = require("console");
var faker = require('faker');
// const cry = require('crypto');
// Scenario('test', async({ I }) => {
//     for (let i = 0; i <= 3; i++) {

//         var data = cry.randomBytes(10).toString("hex");
//         //console.log(data);

//         var fake = faker.random.alphaNumeric(20);
//         console.log(fake);

//     }
// });
Scenario('Test', async({ I }) => {
    // I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
    // I.fillField('Username', 'demo');
    // I.fillField('Password', 'demo');
    // I.click('Log In');
    // I.click('#rtm_show_upload_ui');
    // I.waitForClickable('#rtMedia-upload-button', 10);
    // I.attachFile('#rtMedia-upload-button', "data/img.png");
    // I.attachFile('#rtMedia-upload-button', 'data/img.png');
    // I.click('#rtMedia-upload-button');
    // I.wait(4);
    // I.click('Start upload');
    I.usePuppeteerTo('emulate offline mode', async({ page, browser }) => {
        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();
        try {
            await page.goto('https://qa.rtcamp.net/members/demo/media/1651');
            await page.type('#bp-login-widget-user-login', 'demo', { delay: 100 });
            await page.type('#bp-login-widget-user-pass', 'demo', { delay: 100 });
            await page.click('#bp-login-widget-submit');
        } catch (error) {
            console.log(error);
        }


        // new code
        await page.waitForSelector('#rtm_show_upload_ui');
        await page.click('#rtm_show_upload_ui');
        await page.waitForSelector('#rtMedia-upload-button');

        //youtube video
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click('#rtMedia-upload-button')
        ])
        await fileChooser.accept(['data/img.png']);
        await page.waitForSelector('#drag-drop-area > input');
        await page.click('#drag-drop-area > input');
        await page.waitForTimeout(5000);


        // await browser.close();

    });



})