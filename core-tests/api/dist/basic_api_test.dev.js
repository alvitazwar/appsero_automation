"use strict";

Feature('Basic API Check');
Scenario('Check Login API', function _callee(_ref) {
  var I, loginAs, data, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          data = {
            "email": "monirul@yopmail.com",
            "password": "11223344"
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(I.sendPostRequest('/login', data));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(I.assertEqual(res.status, 200));

        case 7:
          console.log(res.data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Scenario('Check Single Plugin Details', async({ I, loginAs }) => {
//     const { data, status } = await I.sendGetRequest('/v1/plugins/fastspring-license-subs');
//     //console.log(res.data);
//     console.log(data.data);
//     console.log(data.data.hash);
//     await I.assertEqual(status, 200);
// });
// Scenario('Check All plugin Details', async({ I, loginAs }) => {
//     const res = await I.sendGetRequest('/v1/plugins?page=1');
//     console.log(res.data.data)
//         //console.log(JSON.stringify(res.data.data));
//         // console.log(JSON.stringify(res));
//     await I.assertEqual(res.status, 200);
// });