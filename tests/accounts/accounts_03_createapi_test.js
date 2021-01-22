Feature('Appsero');

Scenario('@accounts api create ',async ({ I }) => {
  // I.amOnPage('https://staging.appsero.com/login');
  // I.fillField('Email Address', 'alvitazwar@wedevs.com');
  // I.fillField('Password','crisis052');
  // I.click('Log in');
  // I.see('Plugins');
  I.loginAsAdmin();
  I.click('//*[@id="app"]/section/aside/div/div[2]/ul/li[6]/a');
  I.click('//div[@class="ant-row-flex ant-row-flex-middle ant-row-flex-space-between page-heading"]/button[@type="button"]');
  I.see('Not connected');




}).tag('@accounts');
