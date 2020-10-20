Feature('Appsero');

Scenario('Team add project',async (I) => {
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
  //I.click('Projects');
  I.click('//*[@id="app"]//div/div[1]/ul/li[4]/a');

  //I.amOnPage('https://staging.appsero.com/teams/31/projects');
  I.waitForElement('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[2]', 30);
  I.click('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[2]');
  I.fillField('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[3]/div/input','ww');
  //I.waitForElement('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[3]/div/input',30);
//  I.click('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[3]/div/input');
  I.pressKey("Enter");
  I.refreshPage();
  I.see('ww');
  }).tag('@team');
