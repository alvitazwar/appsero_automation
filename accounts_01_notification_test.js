Feature('Appsero');

Scenario('@accounts Toggle Notification ',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.click('//*[@id="app"]/section/section/header/div[2]/a');
  I.click('Account');
  I.click('Notification Settings');
  I.click('.ant-card-body > div:nth-of-type(1) > button[role="switch"]');
  I.see('Notification Settings Updated Successfully.');
  I.click('.ant-card-body > div:nth-of-type(1) > button[role="switch"]');
  I.see('Notification Settings Updated Successfully.');
  I.click('div:nth-of-type(3) > button[role="switch"]');
  I.see('Notification Settings Updated Successfully.');
  I.click('div:nth-of-type(3) > button[role="switch"]');
  I.see('Notification Settings Updated Successfully.');

}).tag('@accounts');
