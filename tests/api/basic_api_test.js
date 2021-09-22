Feature('Basic API Check');

// Scenario('Check Login API', async({ I, loginAs }) => {
//     var data = {
//         "email": "atd.mondol@gmail.com",
//         "password": "appsero@_6598"
//     };
//     const res = await I.sendPostRequest('/login', data);
//     await I.assertEqual(res.status, 200);
//     console.log(res.data);

// });
Scenario('Check Single Plugin Details', async({ I, loginAs }) => {

    const res = await I.sendGetRequest('/v1/plugins/fastspring-license-subs');
    console.log(res.data);
    await I.assertEqual(res.status, 200);
});
// Scenario('Check All plugin Details', async({ I, loginAs }) => {
//     const res = await I.sendGetRequest('/v1/plugins?page=1');
//     console.log(res.data.data)
//         //console.log(JSON.stringify(res.data.data));
//         // console.log(JSON.stringify(res));
//     await I.assertEqual(res.status, 200);

// });