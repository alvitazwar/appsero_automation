Feature('Appsero');

Scenario('@accounts Password ',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','Crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.click('//*[@id="app"]/section/section/header/div[2]/a');
  I.click('Account');
  I.click('Security');
  I.fillField('Current Password','Crisis052');
  I.fillField('New Password','crisis052');
  I.fillField('Confirm New Password','crisis052');
  I.click('Update Profile');
  I.click('Update Profile');
  I.see('Password Updated Successfully.');


}).tag('@accounts');
