Feature('Appsero');

Scenario('@settings edit License ',async ({ I }) => {
  I.loginAsAdmin();
  I.amOnPage('https://staging.appsero.com/plugins');
  I.click('envato plg test');
  I.click('Settings');
  I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/settings/licensing');
  I.click('//*[@id="app"]//section/main//div[1]/ul[2]/li[1]');
  I.click('Update Licensing');
  I.see('Settings has been updated.');





}).tag('@settings');
//email_05_pause_test.js
