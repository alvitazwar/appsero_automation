"use strict";

Feature('File Upload Test');
Scenario('Upload a file in Appsero', function(_ref) {
    var I = _ref.I;
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.click('FastSpring_License_subs');
    I.click('Releases');
    I.click('Create a New Release');
    I.fillField('Version', '1.1');
    I.click('#release_date > div > input');
    I.clickLink('Today', 'div > div.ant-calendar-date-panel > div.ant-calendar-footer > span > a');
    I.fillField('Changelog', 'Test New File upload');
    I.attachFile('div.ant-col.ant-form-item-control-wrapper > div > span > span > div > span > button', 'appsero_automation/fastspring_license_subs.zip');
    I.checkOption(' div.ant-modal-content > div.ant-modal-footer > div > label > span.ant-checkbox > input');
});