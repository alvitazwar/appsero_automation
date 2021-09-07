var faker = require('faker');
const payload = require('./payload');
Feature('Order create and refund');

Scenario('Add & Deactivate Track', async({ I }) => {
    for (let i = 1; i <= 2; i++) {
        const data = payload.getFakerData();
        const data_order = payload.getFastSpringOrder(data);
        const data_ref = payload.getRefund(data);
        if (i % 2 == 0) {
            await I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', data_order).then((res) => {
                I.assertEqual(res.status, 200);
                if (res.status == 200) {
                    dec = I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', data_ref).then(res => {
                        I.assertEqual(res.status, 200);
                    });
                }
            });
        } else {
            const res = await I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', data_order).then(res => {
                I.assertEqual(res.status, 200);
                console.log(res.data);
            });
        }
    }
    // const res = await I.sendPostRequest('https://api.appsero.com/track', payload.trackinData);
    // await I.assertEqual(res.status, 200);
    // console.log(res.data);

});