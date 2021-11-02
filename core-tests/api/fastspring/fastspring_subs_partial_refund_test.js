var faker = require('faker');
const payload = require('./fastspring_payload');
Feature('Order create and partial refund');
require('dotenv').config()
const { env } = require('../../../utils')
Scenario('partial refund', async({ I, loginAs }) => {
    for (let i = 1; i <= 2; i++) {
        const data = payload.getFakerData();
        const data_order = payload.getFastSpringOrder(data);
        const data_ref = payload.getPartialReturn(data);
        if (i % 2 == 0) {
            await I.sendPostRequest(env('FASTSPRING'), data_order).then((res) => {
                I.assertEqual(res.status, 200);
                if (res.status == 200) {
                    I.wait(5);
                    dec = I.sendPostRequest(env('FASTSPRING'), data_ref).then(res => {
                        I.assertEqual(res.status, 200);
                    });
                }
            });
        } else {
            const res = await I.sendPostRequest(env('FASTSPRING'), data_order).then(res => {
                I.assertEqual(res.status, 200);
                console.log(res.data);
            });
        }
    }

}).tag('@fastspring');