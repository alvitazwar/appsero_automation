Feature('Appsero');

Scenario('Team create',async (I) => {
  I.loginAsAdmin();
  //I.amOnPage('https://staging.appsero.com/login');
  //I.fillField('Email Address', 'alvitazwar@wedevs.com');
  //I.fillField('Password','crisis052');
  //I.click('Log in');
  //I.see('Plugins');
  I.click('//*[@id="app"]/section/section/header/div[2]/a');
  I.click('Teams');
  I.click('New Team');
  //I.fillField('Team Name','automated create');
  I.fillField('//*[@id="app"]//section/main//div[2]/form/div[1]/div[2]/div/span/input','Automated team');
  I.fillField('//*[@id="app"]/section/section/main/div/div/div/div/div[2]/form/div[3]/div[2]/div/span/input','a@gmai.com');
  I.click('Create Team');
  I.click('Get Started');

}).tag('@team');
