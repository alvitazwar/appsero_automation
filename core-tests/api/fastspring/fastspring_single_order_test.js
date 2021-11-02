Feature('Fastspring Single Order test');
const payload = require('./fastspring_payload');
require('dotenv').config()
const { env } = require('../../../utils')
Scenario('Fastspring Single order Place', async({ I, loginAs }) => {
    const data = payload.getFakerData();
    var load = payload.getFastSpringOrder(data);
    const res = await I.sendPostRequest(env('FASTSPRING'), load);
    console.log(res);
    I.assertEqual(res.status, 200);
}).tag('@fastspring');