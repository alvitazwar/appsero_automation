Feature('Fastspring Single Orderrefund');
const payload = require('./payload');
Scenario('Fastspring Single order Placeref', async({ I }) => {
    var load = payload.getRefund();
    const res = await I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', load);
    console.log(res);
    I.assertEqual(res.status, 200);

});