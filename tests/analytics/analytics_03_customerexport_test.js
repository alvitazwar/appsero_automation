Feature('Appsero');

Scenario('@analytics customer export', async({ I }) => {

    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.click('FastSpring_License_subs');
    //I.refreshPage();
    //I.click('//*[@id="app"]//main//div[2]/div[2]/div//div[3]/a');
    //I.waitForElement('/html/body/div[3]/div/div/ul/li/span',30);
    I.click('Sales');
    I.amOnPage('/plugins/test-prod-subscription/sales/customers');
    I.click('Export');
    I.see('customers');
    I.wait(5);
    //I.waitForElement('//body/div[3]/span/div/div/div/div[2]');
    //I.see('//body/div[3]/span/div/div/div/div[2]')
    //I.waitForElement('//div[@class="ant-dropdown ant-dropdown-placement-bottomRight"]/ul[@role="menu"]/li[@role="menuitem"]/span[.=" Remove "]',30);

}).tag('@analytics');;