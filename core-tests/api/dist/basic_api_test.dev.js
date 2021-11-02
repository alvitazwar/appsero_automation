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
            "email": "",
            "password": ""
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
});
Scenario('Check Single Plugin Details', function _callee2(_ref2) {
  var I, loginAs, _ref3, data, status;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref2.I, loginAs = _ref2.loginAs;
          _context2.next = 3;
          return regeneratorRuntime.awrap(I.sendGetRequest('/v1/plugins/fastspring-license-subs'));

        case 3:
          _ref3 = _context2.sent;
          data = _ref3.data;
          status = _ref3.status;
          //console.log(res.data);
          console.log(data.data);
          console.log(data.data.hash);
          _context2.next = 10;
          return regeneratorRuntime.awrap(I.assertEqual(status, 200));

        case 10:
        case "end":
          return _context2.stop();
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