Feature('Appsero');

Scenario('@pro_plugin_woocommerce', async({ I }) => {
    I.loginAsAdmin();
    I.click('//li[2]/a[@href="/plugins"]');
    I.see('Plugins');
    I.click('Add Plugin');
    I.click('.custom-button.mr-16.premium');
    I.metadataPlugin();
    I.metadataVersion();
    I.metadataPHP();
    I.metadataWordpress();
    I.metadataTested();
    I.click('Next');
    I.click('Next');
    I.click('Yes');




}).tag('@pro_plugin');