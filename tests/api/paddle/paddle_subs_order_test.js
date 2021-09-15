Feature('Paddle Subs order');
const payload = require('./paddle_payload');
Scenario('Paddle subscription purchase scenario', async({ I, loginAs }) => {
    var data = payload.getFakerData();
    var load = payload.getSubsCreateOrder(data);
    var succ = payload.getSubsPaymentSucceed(data);
    const res = await I.sendPostRequest('/webhook/paddle/7d494986-fe98-413e-b671-565a8dfaae30', load);
    const payment = await I.sendPostRequest('/webhook/paddle/7d494986-fe98-413e-b671-565a8dfaae30', succ);
    console.log(payment);
    console.log(res);
    I.assertEqual(res.status, 200);

});