Feature('Appsero');

Scenario('@analytics user report export',async ({ I }) => {
  // I.amOnPage('https://staging.appsero.com/login');
  // I.fillField('Email Address', 'alvitazwar@wedevs.com');
  // I.fillField('Password','crisis052');
  // I.click('Log in');
  // I.see('Plugins');
  I.loginAsAdmin();
  //I.click('//*[@id="app"]/section/section/header/div[2]/a');
  //I.click('Teams');
  I.amOnPage('/plugins');
  I.click('envato plg test');
  //I.refreshPage();
  //I.click('//*[@id="app"]//main//div[2]/div[2]/div//div[3]/a');
  //I.waitForElement('/html/body/div[3]/div/div/ul/li/span',30);
  I.click('Analytics');
  I.amOnPage('/plugins/envato-plg-test/users');
  I.click('Export');
  I.wait(4);
  //I.waitForElement('//body/div[3]/span/div/div/div/div[2]');
  //I.see('//body/div[3]/span/div/div/div/div[2]')
  //I.waitForElement('//div[@class="ant-dropdown ant-dropdown-placement-bottomRight"]/ul[@role="menu"]/li[@role="menuitem"]/span[.=" Remove "]',30);

}).tag('@analytics');
