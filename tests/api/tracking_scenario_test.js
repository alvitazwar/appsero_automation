var faker = require('faker');
const payload = require('./payload');
Feature('Site activate and Deactivate Scenario');

Scenario('Add & Deactivate Track', async({ I }) => {
    for (let i = 1; i <= 2; i++) {
        var demo = payload.getTrackingInfo();
        if (i % 2 == 0) {
            await I.sendPostRequest('https://api.appsero.com/track', demo).then((res) => {
                I.assertEqual(res.status, 200);
                console.log(res.data);
            });

            setTimeout(() => {
                dec = I.sendPostRequest('https://api.appsero.com/deactivate', demo).then(res => {
                    I.assertEqual(res.status, 200);
                });
            }, 5000);
        } else {
            const res = await I.sendPostRequest('https://api.appsero.com/track', demo).then(res => {
                I.assertEqual(res.status, 200);
                console.log(res.data);
            });
        }
    }
    // const res = await I.sendPostRequest('https://api.appsero.com/track', payload.trackinData);
    // await I.assertEqual(res.status, 200);
    // console.log(res.data);

});