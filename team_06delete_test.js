Feature('Appsero');

Scenario('Team  delete',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');

  I.see('Plugins');
  I.click('//*[@id="app"]/section/section/header/div[2]/a');
  I.click('Teams');
  I.click('Automated team');
  I.refreshPage();
  //I.amOnPage('https://staging.appsero.com/teams/43/members');
  I.click('Settings');
  //I.waitForElement('/html/body/div[3]/div/div/ul/li/span',30);
  //I.click('Delete Team');
  I.click('//*[@id="app"]//div/form/div[4]/button[1]');
  I.click('.ant-btn-primary.ant-btn-sm');
  I.dontSee('Automated team');
  });
