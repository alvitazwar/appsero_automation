Feature('Appsero');

Scenario('@email send now email digest ',async ({ I }) => {
  I.loginAsAdmin();
  I.amOnPage('/plugins');
  I.click('envato plg test');
  I.click('Email');
  I.amOnPage('/plugins/envato-plg-test/email-digest');
  I.wait(2);
  I.moveCursorTo('#app > section > section > main > div > div.plugins-list.ant-row > div:nth-child(1) > div > div > div.mr-8.ml-auto > a');
  I.wait(2);
  I.forceClick('li:nth-of-type(3) > span');
  I.wait(2);
  var msg='Mail has been sent successfully.';
  I.see(msg);


}).tag('@email');
