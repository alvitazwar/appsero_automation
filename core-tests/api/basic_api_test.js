Feature('Basic API Check');

// Scenario('Check Login API', async({ I, loginAs }) => {
//     var data = {
//         "email": "monirul@yopmail.com",
//         "password": "11223344"
//     };
//     const res = await I.sendPostRequest('/login', data);
//     await I.assertEqual(res.status, 200);
//     console.log(res.data);

// });
Scenario('Check Single Plugin Details', async({ I, loginAs }) => {

    const { data, status } = await I.sendGetRequest('/v1/plugins/fastspring-license-subs');
    //console.log(res.data);
    console.log(data.data);
    console.log(data.data.hash);
    await I.assertEqual(status, 200);
});
// Scenario('Check All plugin Details', async({ I, loginAs }) => {
//     const res = await I.sendGetRequest('/v1/plugins?page=1');
//     console.log(res.data.data)
//         //console.log(JSON.stringify(res.data.data));
//         // console.log(JSON.stringify(res));
//     await I.assertEqual(res.status, 200);

// });