Feature('Appsero');

Scenario('@email pause-active function ',async ({ I }) => {
  I.loginAsAdmin();
  I.amOnPage('/plugins');
  I.click('envato plg test');
  I.click('Email');
  I.amOnPage('/plugins/envato-plg-test/email-digest');
  I.wait(2);
  I.moveCursorTo('#app > section > section > main > div > div.plugins-list.ant-row > div:nth-child(1) > div > div > div.mr-8.ml-auto > a');
  I.wait(2);
  I.forceClick('//div[@class="ant-dropdown ant-dropdown-placement-bottomLeft"]/ul[@role="menu"]/li[2]/span[.=" Pause "]');
  I.wait(2);
  I.see('Status updated successfully.');
  I.wait(3);
  I.moveCursorTo('#app > section > section > main > div > div.plugins-list.ant-row > div:nth-child(1) > div > div > div.mr-8.ml-auto > a');
  I.forceClick('//div[@class="ant-dropdown ant-dropdown-placement-bottomLeft"]/ul[@role="menu"]/li[2]/span[.=" Active "]');
  I.wait(2);
  I.see('Status updated successfully.');


}).tag('@email');
//email_05_pause_test.js
