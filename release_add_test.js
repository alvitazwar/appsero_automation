Feature('Appsero');

Scenario('login test',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.click('//li[2]/a[@href="/plugins"]');
  I.see('Plugins');
  I.click('envato plg test');
  I.click('Releases');
  I.click('Add New Release');
  I.fillField('Version','2.0');
  I.click('//*[@id="release_date"]/div/input');
  I.click('//div[4]/div/div/div/div/div[2]/div[2]/table/tbody/tr[5]/td[4]/div');
  I.fillField('Changelog','This is tested by BDD');
  I.fillField('File Name','Demo test');
  I.attachFile('#file_location\[envato-plg-test\]\.path','test.zip');
  I.click('Public Release');
});
