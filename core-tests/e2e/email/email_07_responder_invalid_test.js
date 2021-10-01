Feature('Appsero');

Scenario(' Responder function invalid ', async({ I, loginAs }) => {
    // I.amOnPage('https://staging.appsero.com/login');
    // I.fillField('Email Address', 'alvitazwar@wedevs.com');
    // I.fillField('Password','crisis052');
    // I.click('Log in');
    // I.see('Plugins');
    loginAs('admin_staging');
    I.amOnPage('/plugins');
    I.click('envato plg test');
    I.click('Email');
    I.amOnPage('/plugins/envato-plg-test/settings/deactivation-auto-responder');
    I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
    I.wait(2);
    I.see('Deactivation auto responder enabled successfully');
    I.fillField('//*[@id="app"]//div/span/input', '2adbc@gm//?com');
    I.click('Update');
    I.wait(2);
    I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
    I.wait(2);
    I.see('Deactivation auto responder disabled successfully');
    I.see('Reply to email updated successfully');
    I.click('//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]');
    I.say('Email verification not included');

});
//email_05_pause_test.js