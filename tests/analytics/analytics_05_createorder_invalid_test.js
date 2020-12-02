Feature('Appsero');

Scenario('@analytics create order invalid',async (I) => {
  I.amOnPage('https://staging.appsero.com/login');
  I.fillField('Email Address', 'alvitazwar@wedevs.com');
  I.fillField('Password','crisis052');
  I.click('Log in');
  I.see('Plugins');
  I.amOnPage('https://staging.appsero.com/plugins');
  I.click('TEST prod subscription');
  I.click('Sales');
  I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/sales/orders');
  I.click('Create Order');
  I.fillField('Customer Name','Automated');
  I.fillField('Customer Email','customer.com');
  I.fillField('Customer Phone','asvaa');
  I.fillField('Price','asda');
  I.fillField('Discount','abed')
  I.click('Submit');
  I.see('Unknown error occurred.');
  I.say('Not Validate properly');

}).tag('@analytics');

