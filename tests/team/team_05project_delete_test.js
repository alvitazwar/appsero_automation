Feature('Appsero');

Scenario('Team project delete',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  //I.click('//*[@id="app"]/section/section/header/div[2]/a');
  //I.click('Teams');
  I.amOnPage('https://staging.appsero.com/teams');
  I.click('Automated team');
  I.refreshPage();
  //I.click('//*[@id="app"]//main//div[2]/div[2]/div//div[3]/a');
  //I.waitForElement('/html/body/div[3]/div/div/ul/li/span',30);
  I.click('Projects');
  //I.waitForElement('//div[@class="ant-dropdown ant-dropdown-placement-bottomRight"]/ul[@role="menu"]/li[@role="menuitem"]/span[.=" Remove "]',30);
  I.moveCursorTo('#app > section > section > main > div > div.project-inner-page.page-content > div > div > div:nth-child(2) > div > div > div > div.mr-8.ml-auto > a > i > svg');
  I.click('Remove');
  I.click('Yes');
  I.dontSee('ww');
  }).tag('@team');
