Feature('Appsero');

Scenario('Plugin add',async ({ I }) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.click('//li[2]/a[@href="/plugins"]');
  I.see('Plugins');
  I.click('Add Plugin');
  I.click('//*[@id="app"]//button[2]');
  I.click('Manual Entry');
  I.fillField('Plugin Name','Test demo');
  I.fillField('Plugin Version', '2.0');
  I.click('//*[@id="php"]/div/div');
  I.fillField('//*[@id="php"]/div/div','5.2');
  I.click('//*[@id="requires"]/div/div');
  I.fillField('//*[@id="requires"]/div/div','5.4');
  //pause();
  I.click('//*[@id="tested"]/div/div');
  I.fillField('//*[@id="tested"]/div/div','5.3');
  I.click('//*[@id="description"]');
  I.fillField('//*[@id="description"]','Demo Text');
  I.click('Next');
  I.click('Skip');
  I.click('Skip');
  I.click('Next');
pause();
});
