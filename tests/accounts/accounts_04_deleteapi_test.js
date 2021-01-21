Feature('Appsero');

Scenario('@accounts api delete ',async ({ I }) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.click('//*[@id="app"]/section/aside/div/div[2]/ul/li[6]/a');
  I.see('Not connected');
  I.click('//*[@id="app"]//div[2]/table/tbody/tr[2]/td[4]/button');
  I.click('Yes');
  I.see('API Key Deleted Successfully.');




}).tag('@accounts');
