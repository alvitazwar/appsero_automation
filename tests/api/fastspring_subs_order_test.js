Feature('Fastspring subscription Order test');
const payload = require('./payload');
Scenario('Fastspring subscription order create', async({ I }) => {
    var data = payload.getFakerData();
    var load = payload.getFastspringSubsorder(data);
    const res = await I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', load);
    console.log(res.data.id);
    I.assertEqual(res.status, 200);

});