Feature('Appsero');

Scenario('@accounts profile update ',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  //I.click('//*[@id="app"]/section/aside/div/div[2]/ul/li[6]/a');
  I.amOnPage('https://staging.appsero.com/profile/');
  I.clearField('First Name');
  I.fillField('First Name','Alvi');
  I.clearField('Last Name');
  I.fillField('Last Name','Tazwar');
  I.click('Update Profile');
  I.see('Profile updated successfully!');






}).tag('@accounts');
