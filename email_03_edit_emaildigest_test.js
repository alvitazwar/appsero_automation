Feature('Appsero');

Scenario('Email edit email digest valid',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.amOnPage('https://staging.appsero.com/plugins');
  I.click('envato plg test');
  I.click('Email');
  I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/email-digest');
  I.moveCursorTo('#app > section > section > main > div > div.plugins-list.ant-row > div:nth-child(1) > div > div > div.mr-8.ml-auto > a');
  I.forceClick('//div[@class="ant-dropdown ant-dropdown-placement-bottomLeft"]/ul[@role="menu"]/li[1]/span[.=" Edit "]');
  I.see('Send To');
  I.fillField('Send To','abcd@gmail.com');
  I.click('//*[@id="frequency"]/div/div');
  I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[2]');
  I.click('//*[@id="send_on"]/div/div');
  I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[5]');
  I.fillField('Digest Name','Test automation3');
  I.click('Submit');
  I.see('Test automation3');
  I.say('Mail has been sent successfully.');

}).tag('@email');
