Feature('Appsero');

Scenario('@email Responder function invalid ',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.amOnPage('https://staging.appsero.com/plugins');
  I.click('envato plg test');
  I.click('Email');
  I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/settings/deactivation-auto-responder');
  I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
  I.wait(2);
  I.see('Updated Successfully');
  I.fillField('//*[@id="app"]//div/span/input','2adbc@gm//?com');
  I.click('Update');
  I.wait(2);
  I.see('Reply To Eimail Updated Successfully');
  I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
  I.say('Email verification not included');




}).tag('@email');
//email_05_pause_test.js
