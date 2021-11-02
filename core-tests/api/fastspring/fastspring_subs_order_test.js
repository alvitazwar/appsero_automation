Feature('Fastspring subscription Order test');
const payload = require('./fastspring_payload');
require('dotenv').config()
const { env } = require('../../../utils')
Scenario('Fastspring subscription order create', async({ I, loginAs }) => {
    var data = payload.getFakerData();
    var load = payload.getFastspringSubsorder(data);
    const res = await I.sendPostRequest(env('FASTSPRING'), load);
    console.log(res);
    I.assertEqual(res.status, 200);

}).tag('@fastspring');