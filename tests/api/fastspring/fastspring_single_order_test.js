Feature('Fastspring Single Order test');
const payload = require('./fastspring_payload');
Scenario('Fastspring Single order Place', async({ I, loginAs }) => {
    const data = payload.getFakerData();
    var load = payload.getFastSpringOrder(data);
    const res = await I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', load);
    console.log(res);
    I.assertEqual(res.status, 200);
});