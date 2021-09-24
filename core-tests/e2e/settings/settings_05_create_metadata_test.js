Feature('Appsero');

Scenario('@settings create metadata ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    // I.amOnPage('https://staging.appsero.com/login');
    // I.fillField('Email Address', 'alvitazwar@wedevs.com');
    // I.fillField('Password','crisis052');
    // I.click('Log in');
    // I.see('Plugins');
    I.amOnPage('/plugins');
    I.Selectplugin();
    I.click('Settings');
    I.amOnPage('/metadata');
    I.metadataCreate();
    //I.fillField('Name','Automated metadata');
    I.click('#datatype > div > div > div', );
    I.click('ul[role="listbox"] > li:nth-of-type(1)');
    I.click('Add Field');
    I.see('Meta Field Added successfully.');
}).tag('@settings');