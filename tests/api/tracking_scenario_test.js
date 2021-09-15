var faker = require('faker');
const payload = require('./payload');
Feature('Appsero Analytics');

Scenario('Site activate and Deactivate Scenario', async({ I, loginAs }) => {
    for (let i = 1; i <= 30; i++) {
        const fake_data = payload.getFakerData();
        const getrack = payload.getTrackingInfo(fake_data);
        if (i % 2 == 0) {
            await I.sendPostRequest('http://a1fa-103-108-147-143.ngrok.io/track', getrack).then((res) => {
                I.assertEqual(res.status, 200);
                console.log(res.data);
                if (res.status == 200) {
                    I.wait(3);
                    I.sendPostRequest('http://a1fa-103-108-147-143.ngrok.io/deactivate', getrack).then(res => {
                        I.assertEqual(res.status, 200);
                        console.log(res.data);
                    });
                }
            });
        } else {
            const res = await I.sendPostRequest('http://a1fa-103-108-147-143.ngrok.io/track', getrack).then(res => {
                I.assertEqual(res.status, 200);
                console.log(res.data);
            });
        }
    }

});