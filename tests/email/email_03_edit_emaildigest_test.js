var Factory= require('rosie');
var faker =require('faker');

Feature('Appsero');

Scenario('@email edit email digest',async ({ I }) => {
  I.loginAsAdmin();
  I.amOnPage('/plugins');
  I.click('envato plg test');
  I.click('Email');
  I.amOnPage('/plugins/envato-plg-test/email-digest');
  I.moveCursorTo('#app > section > section > main > div > div.plugins-list.ant-row > div:nth-child(1) > div > div > div.mr-8.ml-auto > a');
  I.forceClick('//div[@class="ant-dropdown ant-dropdown-placement-bottomLeft"]/ul[@role="menu"]/li[1]/span[.=" Edit "]');
  I.see('Send To');
  I.fillField('Send To',faker.internet.email());
  I.click('//*[@id="frequency"]/div/div');
  I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[2]');
  I.click('//*[@id="send_on"]/div/div');
  I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[5]');
  I.fillField('Digest Name','Test automation3');
  I.click('Submit');
  I.see('Test automation3');
  I.say('Mail has been sent successfully.');

}).tag('@email');
