const {
    I
} = inject();
module.exports = {
    profilemenu: '//*[@id="app"]/section/section/header/div[2]/a',
    //notification settings
    emailnotification: '.ant-card-body > div:nth-of-type(1) > button[role="switch"]',
    msg: 'Notification Settings Updated Successfully.',
    appseronoification: 'div:nth-of-type(3) > button[role="switch"]',
    apikeymenu: '//*[@id="app"]/section/aside/div/div[2]/ul/li[6]/a',
    createapibutton: '//div[@class="ant-row-flex ant-row-flex-middle ant-row-flex-space-between page-heading"]/button[@type="button"]',
    firstdelete: 'div.ant-table.appsero-table-default.appsero-responsive-table.api-keys-table > table > tbody > tr:nth-child(1) > td.align-md-right > button',
}