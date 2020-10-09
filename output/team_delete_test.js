Feature('Appsero');

Scenario('Team delete',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.click('//*[@id="app"]/section/section/header/div[2]/a');
  I.click('Teams');
  I.click('dem');
  I.click('//*[@id="app"]//section/main//ul/li[6]/a');
  I.click('Delete Team');
  I.click('Yes');
  I.dontSee('dem');
  });
