Feature('Fastspring subscription Order test');
const payload = require('./fastspring_payload');
Scenario('Fastspring subscription variation upgrade order create', async({ I, loginAs }) => {
    var data = payload.getFakerData();
    var load = payload.getFastspringSubsorder(data);
    var variation = payload.getvariationproduct(data);
    const res = await I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', load).then((res) => {
        I.assertEqual(res.status, 200);
        if (res.status == 200) {
            I.wait(5);
            dec = I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', variation).then(res => {
                I.assertEqual(res.status, 200);
            });
        }
    });



});