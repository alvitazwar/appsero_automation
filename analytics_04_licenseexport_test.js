Feature('Appsero');

Scenario('@analytics licenses Export',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  //I.click('//*[@id="app"]/section/section/header/div[2]/a');
  //I.click('Teams');
  I.amOnPage('https://staging.appsero.com/plugins');
  I.click('envato plg test');
  //I.refreshPage();
  //I.click('//*[@id="app"]//main//div[2]/div[2]/div//div[3]/a');
  //I.waitForElement('/html/body/div[3]/div/div/ul/li/span',30);
  I.click('Licenses');
  I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/licenses');
  I.click('Export');
  I.waitForElement('//*[@id="app"]/section/section/main/div/div[2]/div/div/div/div/div/h3',5);
  I.see('No licenses found.')
  I.wait(3);
  //I.waitForElement('//div[@class="ant-dropdown ant-dropdown-placement-bottomRight"]/ul[@role="menu"]/li[@role="menuitem"]/span[.=" Remove "]',30);

  });
