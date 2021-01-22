var Factory= require('rosie');
var faker =require('faker');

Feature('Appsero');

Scenario('@email insert email digest Invalid',async ({ I }) => {
  I.loginAsAdmin();
  I.amOnPage('/plugins');
  I.click('envato plg test');
  I.click('Email');
  I.amOnPage('/plugins/envato-plg-test/email-digest');
  I.click('Add Email Digest');
  I.fillField('Send To','##'+faker.internet.email());
  I.click('//*[@id="frequency"]/div/div');
  I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[2]');
  I.click('//*[@id="send_on"]/div/div');
  I.click('//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[5]');
  I.fillField('Digest Name','Invalid Email test');
  I.click('Submit');
  I.see('Invalid Email test');
  I.say('Email verification not found');


}).tag('@email');
