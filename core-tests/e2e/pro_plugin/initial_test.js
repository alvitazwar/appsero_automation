Feature(' Initial Start appsero');
const payload = require('./plugin_payload')
const slugify = require('slugify');
const path = require('path');
const fs = require('fs');
var plugin_name;
var plugin_slug;
var plugin_uuid;
Scenario('Appsero Fresh start Add Plugin', async({ I, loginAs }) => {
    loginAs('admin_new');
    I.click('//li[2]/a[@href="/plugins"]');
    I.see('Plugins');
    I.click('Add Plugin');
    I.click('.custom-button.mr-16.premium');
    plugin_name = await I.metadataPlugin();
    var mypath = path.join(__dirname, 'test.txt');
    try {
        const data = fs.writeFileSync(mypath, plugin_name)
            //file written successfully
    } catch (err) {
        console.error(err)
    }
    plugin_slug = slugify(plugin_name, {
        replacement: '-',
        lower: true,
    });
    I.metadataVersion();
    I.metadataPHP();
    I.metadataWordpress();
    I.metadataTested();
    I.click('Next');
    I.click('Next');
    I.click('Yes');
    I.amOnPage('/plugins')
        // I.click('div.right-menu > div.header-project-switch > button');
        // I.fillField('.ant-input', plugin_name);
        // I.click('div > div > div > div > div.menu-project-item-text > h3');

});
Scenario('Check Single Plugin Details', async({ I, loginAs }) => {

    const { data, status } = await I.sendGetRequest(`/v1/plugins/${plugin_slug}`);
    //console.log(res.data);
    console.log(data.data);
    plugin_uuid = (data.data.hash);
    console.log('UUID is :', data.data.hash);
    await I.assertEqual(status, 200);
});
Scenario('Add and Deactivate site', async({ I, loginAs }) => {
    for (let i = 1; i <= 15; i++) {
        const fake_data = payload.getFakerData();
        console.log(fake_data)
            // const plugin_data = payload.getPluginData()
        const getrack = payload.getTrackingInfo(fake_data, plugin_uuid);
        if (i % 2 == 0) {
            await I.sendPostRequest('/track', getrack).then((res) => {
                I.assertEqual(res.status, 200);
                console.log(res.data);
                if (res.status == 200) {
                    I.wait(3);
                    I.sendPostRequest('/deactivate', getrack).then(res => {
                        I.assertEqual(res.status, 200);
                        console.log(res.data);
                    });
                }
            });
        } else {
            const res = await I.sendPostRequest('/track', getrack).then(res => {
                I.assertEqual(res.status, 200);
                console.log(res.data);
            });
        }
    }
});
Scenario('Check Plugin Connection', async({ I, loginAs }) => {
    loginAs('admin_new');
    I.Selectplugin();


})