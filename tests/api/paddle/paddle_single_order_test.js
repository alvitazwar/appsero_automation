Feature('Paddle Single Order test');
const payload = require('./paddle_payload');
Scenario('Paddle Single order Place', async({ I }) => {
    const data = payload.getFakerData();
    var load = payload.getSubsCreateOrder(data);
    const res = await I.sendPostRequest('/webhook/paddle/7d494986-fe98-413e-b671-565a8dfaae30', load);
    console.log(res);
    I.assertEqual(res.status, 200);
});