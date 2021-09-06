Feature('Fastspring Single Order');
const payload = require('./payload');
Scenario('Fastspring Single order Place', async({ I }) => {
    var load = payload.getFastSpringOrder();
    const res = await I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', load);
    console.log(res);
    I.assertEqual(res.status, 200);

});