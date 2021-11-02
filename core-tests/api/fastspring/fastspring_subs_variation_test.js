Feature('Fastspring subscription Order test');
const payload = require('./fastspring_payload');
require('dotenv').config()
const { env } = require('../../../utils')
Scenario('Fastspring subscription variation upgrade order create', async({ I, loginAs }) => {
    var data = payload.getFakerData();
    var load = payload.getFastspringSubsorder(data);
    var variation = payload.getvariationproduct(data);
    const res = await I.sendPostRequest(env('FASTSPRING'), load).then((res) => {
        I.assertEqual(res.status, 200);
        if (res.status == 200) {
            I.wait(5);
            dec = I.sendPostRequest(env('FASTSPRING'), variation).then(res => {
                I.assertEqual(res.status, 200);
            });
        }
    });
}).tag('@fastspring');