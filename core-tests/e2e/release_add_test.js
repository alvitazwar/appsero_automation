Feature('Appsero');
const puppeteer = require('puppeteer');
var faker = require('faker');
Scenario('release test22', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click('Releases');
    I.click('Add New Release');
    I.fillField('Version', faker.random.float({ min: 1.0, max: 2.0 }));
    I.click('//*[@id="release_date"]/div/input');
    I.click('div > div > div.ant-calendar-date-panel > div.ant-calendar-footer > span > a');
    I.fillField('Changelog', faker.random.words(4));
    I.usePuppeteerTo('upload action', async({ page, browser }) => {
        //const files = await Promise.all([`${data}/file1.zip`, `${data}/file2.zip`])
        const [fileChooser] = await Promise.all([
                page.waitForFileChooser(),
                page.click('div.ant-col.ant-form-item-control-wrapper > div > span > span > div > span > button')
            ])
            //var test_file = test[0];
            //await console.log(file[i]);
        await fileChooser.accept(['data/fastspring_license_subs.zip']);
        await page.waitForTimeout(5000);
    })
    I.click('div.ant-modal-content > div.ant-modal-footer > div > label > span.ant-checkbox > input');
    I.click('div > div.ant-modal-content > div.ant-modal-footer > button');
    //}
});