var faker = require('faker');
const payload = require('./payload');
Feature('Site activate and Deactivate Scenario');

Scenario('Add & Deactivate Track', async({ I }) => {
    for (let i = 1; i <= 10; i++) {
        const fake_data = payload.getFakerData();
        const getrack = payload.getTrackingInfo(fake_data);
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