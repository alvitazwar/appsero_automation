Feature('Appsero');

Scenario('@themes add free theme ',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.click('Themes');
  I.click('//*[@id="app"]//main/div/div[1]/button');
  I.click('//*[@id="app"]//div[2]/button[2]');
  I.click('//*[@id="app"]//div[5]/a');
  I.fillField('Theme Name','Theme_four');
  I.fillField('Theme Version','1.0');
  I.click('Next');
  I.click('//*[@id="app"]//div//div[4]/a');
  I.click('Skip');
  I.click('Next');
  I.click('Done');
  I.click('Done');


}).tag('@themes');
