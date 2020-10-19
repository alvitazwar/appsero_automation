Feature('Appsero');

Scenario('analytics insert email digest Invalid',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.amOnPage('https://staging.appsero.com/plugins');
  I.click('envato plg test');
  I.click('Email');
  I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/email-digest');
  I.click('Add Email Digest');
  I.fillField('Send To','2Aabc@gmail.com');
  I.click('//*[@id="frequency"]/div/div');
  I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[2]');
  I.click('//*[@id="send_on"]/div/div');
  I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[5]');
  I.fillField('Digest Name','Invalid Email test');
  I.click('Submit');
  I.see('Invalid Email test');
  I.say('Email verification not found');


  });
