Feature('Appsero');

Scenario('@analytics create order valid', async (I) => {
    I.amOnPage('https://staging.appsero.com/login');
    I.fillField('Email Address', 'alvitazwar@wedevs.com');
    I.fillField('Password', 'crisis052');
    I.click('Log in');
    I.see('Plugins');
    I.amOnPage('https://staging.appsero.com/plugins');
    I.click('envato plg test');
    I.click('Sales');
    I.amOnPage('https://staging.appsero.com/plugins/envato-plg-test/sales/orders');
    I.click('Create Order');
    I.fillField('Customer Name', 'Automated_Valid');
    I.fillField('Customer Email', 'customer@gm.com');
    I.fillField('Customer Phone', '2321');
    I.fillField('Price', '22');
    I.fillField('Discount', '32');
    I.click('Submit');
    I.see('Sent Successfully');
    I.wait(2);
    I.see('Automated_Valid');


}).tag('@analytics');
