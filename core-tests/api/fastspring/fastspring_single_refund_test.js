Feature('Fastspring Single Orderrefund');
const payload = require('./fastspring_payload');
require('dotenv').config()
const { env } = require('../../../utils')
Scenario('Fastspring Single order Placeref', async({ I, loginAs }) => {
    const data = payload.getFakerData();
    var load = payload.getFullRefund(data);
    const res = await I.sendPostRequest(env('FASTSPRING'), load);
    console.log(res);
    I.assertEqual(res.status, 200);

}).tag('@fastspring');