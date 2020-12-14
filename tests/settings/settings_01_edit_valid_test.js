Feature('Appsero');

Scenario('@settings edit valid ',async (I) => {
  I.loginAsAdmin();
  I.amOnPage('https://staging.appsero.com/plugins');
  I.click('envato plg test');
  I.click('Settings');
  I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/settings/edit');
  I.fillField('//*[@id="version"]','2.0');
  //I.wait(2);
  I.fillField('//*[@id="php"]','5.4');
  I.fillField('//*[@id="requires"]','5.2');
  I.fillField('//*[@id="tested"]','5.1');
  I.click('Update Plugin');





}).tag('@settings');
//email_05_pause_test.js
