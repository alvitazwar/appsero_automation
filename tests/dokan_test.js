Feature('Appsero');
const puppeteer = require('puppeteer');
var faker = require('faker');
Scenario('release test', async({ I, loginAs }) => {
    I.amOnPage('http://dokan-pro.test/my-account/');
    I.fillField('username', 'admin');
    I.fillField('password', 'admin');
    I.click('form > p:nth-child(4) > button');
    I.amOnPage('http://dokan-pro.test/product/celia/edit/');
    I.click('div.dokan-feat-image-upload.dokan-new-product-featured-img > div.instruction-inside > a');

    I.usePuppeteerTo('upload action', async({ page, browser }) => {
        //const files = await Promise.all([`${data}/file1.zip`, `${data}/file2.zip`])
        const [fileChooser] = await Promise.all([
                page.waitForFileChooser(),
                page.waitForSelector('#__wp-uploader-id-1'),
                page.click('#__wp-uploader-id-1')
            ])
            //var test_file = test[0];
            //await console.log(file[i]);
        await fileChooser.accept(['data/img.jpeg']);
        await page.waitForTimeout(10000);
        await page.waitForSelector('div > div.media-toolbar-primary.search-form > button');;
        await page.click('div > div.media-toolbar-primary.search-form > button');
        await page.waitForTimeout(2000);
    })
    I.click('div > form > input.dokan-btn.dokan-btn-theme.dokan-btn-lg.dokan-right');

    // I.click('div.ant-modal-content > div.ant-modal-footer > div > label > span.ant-checkbox > input');
    // I.click('div > div.ant-modal-content > div.ant-modal-footer > button');
    //}
});