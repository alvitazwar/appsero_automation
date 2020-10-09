Feature('Appsero');

Scenario('login test', (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.click('//li[2]/a[@href="/plugins"]');
  I.see('Add Plugin');
});
