Feature('Appsero');

Scenario('@settings edit invalid ',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.amOnPage('https://staging.appsero.com/plugins');
  I.click('envato plg test');
  I.click('Settings');
  I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/settings/edit');
  I.fillField('//*[@id="version"]','abs');
  //I.wait(2);
  I.fillField('//*[@id="php"]','9.3');
  I.fillField('//*[@id="requires"]','5.9');
  I.fillField('//*[@id="tested"]','12');
  I.fillField('//*[@id="homepage"]','122313431');
  I.fillField('//*[@id="demo"]','qwqweqw');
  I.click('Update Plugin');
  I.see('Please fill up all the fields correctly.');
  I.say('Field validation not exist');





}).tag('@settings');
//email_05_pause_test.js
