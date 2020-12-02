Feature('Appsero');

Scenario('@analytics Edit License', async (I) => {
    I.amOnPage('https://staging.appsero.com/login');
    
    I.fillField('Email Address', 'alvitazwar@wedevs.com');
    I.fillField('Password', 'crisis052');
    I.click('Log in');
    I.see('Plugins');
    I.amOnPage('https://staging.appsero.com/plugins');
    I.click('TEST prod subscription');
    I.click('Sales');
    I.amOnPage('https://staging.appsero.com/plugins/test-prod-subscription/licenses');
    I.amOnPage('https://staging.appsero.com/plugins/test-prod-subscription/license/74');
    //I.click(' table > tbody > tr:nth-child(1) > td.tcol-action > button.mr-8.ant-btn > a');
    
    
    //I.waitForClickable('div.align-right.ant-col.ant-col-12 > button',5);
    I.click('Edit');
    //Calendar Access
    I.click(' div > span > span > div > input');
    I.click(' div > span > a.ant-calendar-month-select');
    I.click(' span.ant-calendar-month-panel-year-select-content');
    I.click(' span.ant-calendar-year-panel-decade-select-content');
    I.click(' a.ant-calendar-decade-panel-next-century-btn');
    I.click('table > tbody > tr:nth-child(2) > td:nth-child(2) > a');
    I.doubleClick('a.ant-calendar-year-panel-next-decade-btn');
    I.doubleClick('a.ant-calendar-year-panel-next-decade-btn');
    I.doubleClick('a.ant-calendar-year-panel-next-decade-btn');
    I.doubleClick('a.ant-calendar-year-panel-next-decade-btn');
    I.doubleClick('a.ant-calendar-year-panel-next-decade-btn');
    I.click('table > tbody > tr:nth-child(2) > td:nth-child(2) > a');
    I.click('table > tbody > tr:nth-child(2) > td:nth-child(2) > a');
    I.click(' table > tbody > tr:nth-child(3) > td:nth-child(3) > div');
    I.click(' span > input');
    I.fillField('Activation Limit','5');
    I.click('Create');
    I.see('Updated successfully.');


}).tag('@analytics');
