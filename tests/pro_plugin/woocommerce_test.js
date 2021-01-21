Feature('Appsero');

Scenario('@pro_plugin_woocommerce',async ({ I }) => {
    I.amOnPage('https://staging.appsero.com/login');
    I.fillField('Email Address', 'alvitazwar@wedevs.com');
    I.fillField('Password','crisis052');
    I.click('Log in');
    I.click('//li[2]/a[@href="/plugins"]');
    I.see('Plugins');
    I.click('Add Plugin');
    I.click('.custom-button.mr-16.premium');
    I.metadataPlugin();
    I.metadataVersion();
    I.metadataPHP();
    I.metadataWordpress();
    I.metadataTested();
    pause();


}).tag('@pro_plugin');
