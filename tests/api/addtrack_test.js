var faker = require('faker');
const payload = require('./payload');
Feature('Add Tracking');

Scenario('Add Data', async({ I }) => {
    for (let i = 1; i <= 10; i++) {
        var demo = payload.getTrackingInfo();
        if (i % 2 == 0) {
            await I.sendPostRequest('https://api.appsero.com/track', demo).then((res) => {
                I.assertEqual(res.status, 200);
            });

            setTimeout(() => {
                dec = I.sendPostRequest('https://api.appsero.com/deactivate', demo).then(res => {
                    I.assertEqual(res.status, 200);
                });
            }, 5000);
        } else { const res = await I.sendPostRequest('https://api.appsero.com/track', demo); }
    }
    // const res = await I.sendPostRequest('https://api.appsero.com/track', payload.trackinData);
    // await I.assertEqual(res.status, 200);
    // console.log(res.data);

});