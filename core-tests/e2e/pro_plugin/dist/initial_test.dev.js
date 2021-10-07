"use strict";

Feature(' Initial Start appsero');

var payload = require('./plugin_payload');

var slugify = require('slugify');

var path = require('path');

var fs = require('fs');

var plugin_name;
var plugin_slug;
var plugin_uuid;
Scenario('Appsero Fresh start Add Plugin', function _callee(_ref) {
  var I, loginAs, mypath, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_new');
          I.click('//li[2]/a[@href="/plugins"]');
          I.see('Plugins');
          I.click('Add Plugin');
          I.click('.custom-button.mr-16.premium');
          _context.next = 8;
          return regeneratorRuntime.awrap(I.metadataPlugin());

        case 8:
          plugin_name = _context.sent;
          mypath = path.join(__dirname, 'test.txt');

          try {
            data = fs.writeFileSync(mypath, plugin_name); //file written successfully
          } catch (err) {
            console.error(err);
          }

          plugin_slug = slugify(plugin_name, {
            replacement: '-',
            lower: true
          });
          I.metadataVersion();
          I.metadataPHP();
          I.metadataWordpress();
          I.metadataTested();
          I.click('Next');
          I.click('Next');
          I.click('Yes');
          I.amOnPage('/plugins'); // I.click('div.right-menu > div.header-project-switch > button');
          // I.fillField('.ant-input', plugin_name);
          // I.click('div > div > div > div > div.menu-project-item-text > h3');

        case 20:
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
          return regeneratorRuntime.awrap(I.sendGetRequest("/v1/plugins/".concat(plugin_slug)));

        case 3:
          _ref3 = _context2.sent;
          data = _ref3.data;
          status = _ref3.status;
          //console.log(res.data);
          console.log(data.data);
          plugin_uuid = data.data.hash;
          console.log('UUID is :', data.data.hash);
          _context2.next = 11;
          return regeneratorRuntime.awrap(I.assertEqual(status, 200));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
});
Scenario('Add and Deactivate site', function _callee3(_ref4) {
  var I, loginAs, _loop, i;

  return regeneratorRuntime.async(function _callee3$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          I = _ref4.I, loginAs = _ref4.loginAs;

          _loop = function _loop(i) {
            var fake_data, getrack, res;
            return regeneratorRuntime.async(function _loop$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    fake_data = payload.getFakerData();
                    console.log(fake_data); // const plugin_data = payload.getPluginData()

                    getrack = payload.getTrackingInfo(fake_data, plugin_uuid);

                    if (!(i % 2 == 0)) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 6;
                    return regeneratorRuntime.awrap(I.sendPostRequest('/track', getrack).then(function (res) {
                      I.assertEqual(res.status, 200);
                      console.log(res.data);

                      if (res.status == 200) {
                        I.wait(3);
                        I.sendPostRequest('/deactivate', getrack).then(function (res) {
                          I.assertEqual(res.status, 200);
                          console.log(res.data);
                        });
                      }
                    }));

                  case 6:
                    _context3.next = 11;
                    break;

                  case 8:
                    _context3.next = 10;
                    return regeneratorRuntime.awrap(I.sendPostRequest('/track', getrack).then(function (res) {
                      I.assertEqual(res.status, 200);
                      console.log(res.data);
                    }));

                  case 10:
                    res = _context3.sent;

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          };

          i = 1;

        case 3:
          if (!(i <= 15)) {
            _context4.next = 9;
            break;
          }

          _context4.next = 6;
          return regeneratorRuntime.awrap(_loop(i));

        case 6:
          i++;
          _context4.next = 3;
          break;

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
});
Scenario('Check Plugin Connection', function _callee4(_ref5) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee4$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          I = _ref5.I, loginAs = _ref5.loginAs;
          loginAs('admin_new');
          I.Selectplugin();

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
});