Feature('Appsero');

Scenario(' Password ', async({ I, loginAs }) => {

    loginAs('admin_staging');
    I.click('//*[@id="app"]/section/section/header/div[2]/a');
    I.click('Account');
    I.click('Security');
    I.fillField('Current Password', 'Crisis052');
    I.fillField('New Password', 'crisis052');
    I.fillField('Confirm New Password', 'crisis052');
    I.click('Update Profile');
    I.click('Update Profile');
    I.see('Password Updated Successfully.');
});