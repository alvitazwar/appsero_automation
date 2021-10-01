Feature('Appsero');

Scenario('Team remove team member',async ({ I }) => {
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
  //I.amOnPage('https://staging.appsero.com/teams/31/projects');
  //I.waitForElement('//*[@id="app"]/section/section/main/div/div[2]/div/div/div[1]/div/div/div/div[2]', 30);
  I.moveCursorTo('#app > section > section > main > div > div.member-inner-page.page-content > div > div > div:nth-child(2) > div:nth-child(1) > div > div > div.mr-8.ml-auto > a > i');

  I.click('Remove');

  //I.selectOption('Role', 'manager');
  I.click('Yes');
  //I.pressKey("Enter");
  I.dontSee('Saif');
  }).tag('@team');
