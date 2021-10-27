"use strict";

Feature('Basic API Check'); // Scenario('Check Login API', async({ I, loginAs }) => {
//     var data = {
//         "email": "monirul@yopmail.com",
//         "password": "11223344"
//     };
//     const res = await I.sendPostRequest('/login', data);
//     await I.assertEqual(res.status, 200);
//     console.log(res.data);
// });

Scenario('Check Single Plugin Details', function _callee(_ref) {
  var I, loginAs, _ref2, data, status;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          _context.next = 3;
          return regeneratorRuntime.awrap(I.sendGetRequest('/v1/plugins/fastspring-license-subs'));

        case 3:
          _ref2 = _context.sent;
          data = _ref2.data;
          status = _ref2.status;
          //console.log(res.data);
          console.log(data.data);
          console.log(data.data.hash);
          _context.next = 10;
          return regeneratorRuntime.awrap(I.assertEqual(status, 200));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Scenario('Check All plugin Details', async({ I, loginAs }) => {
//     const res = await I.sendGetRequest('/v1/plugins?page=1');
//     console.log(res.data.data)
//         //console.log(JSON.stringify(res.data.data));
//         // console.log(JSON.stringify(res));
//     await I.assertEqual(res.status, 200);
// });