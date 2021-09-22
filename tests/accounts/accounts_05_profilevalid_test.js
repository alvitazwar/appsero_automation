Feature('Appsero Accounts');
const locator = require('./accounts_locator_test');
Scenario('@accounts profile update ', async({ I, loginAs }) => {
    loginAs('admin_staging');
    I.click(locator.profilemenu);
    I.click('Account');
    I.clearField('First Name');
    I.fillField('First Name', 'Alvi');
    I.clearField('Last Name');
    I.fillField('Last Name', 'Tazwar');
    I.click('Update Profile');
    I.see('Profile updated successfully!');
}).tag('@accounts');