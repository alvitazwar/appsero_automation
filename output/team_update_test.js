Feature('Appsero');

Scenario('Team add',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.click('//*[@id="app"]/section/section/header/div[2]/a');
  I.click('Teams');
  I.click('dem');
  I.click('Settings');
  I.fillField('Team Name','Demo');
  I.click('Update Team');
  pause();
  });
