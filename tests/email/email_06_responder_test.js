var Factory= require('rosie');
var faker =require('faker');
Feature('Appsero');

Scenario('@email Responder function valid ',async ({ I }) => {
  // I.amOnPage('https://staging.appsero.com/login');
  // I.fillField('Email Address', 'alvitazwar@wedevs.com');
  // I.fillField('Password','crisis052');
  // I.click('Log in');
  // I.see('Plugins');
  I.loginAsAdmin();
  I.amOnPage('https://staging.appsero.com/plugins');
  I.click('envato plg test');
  I.click('Email');
  I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/settings/deactivation-auto-responder');
  I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
  I.wait(2);
  I.see('Deactivation auto responder enabled successfully');
  //I.fillField('//*[@id="app"]//div/span/input','adbc@gm.com');
  I.valid_email();
  I.click('Update');
  I.wait(2);
  I.see('Reply to email updated successfully');
  I.wait(3);
  I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
  I.wait(2);
  I.see('Deactivation auto responder disabled successfully');
  




}).tag('@email');
//email_05_pause_test.js
