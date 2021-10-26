"use strict";

/* This file is mainly Developed for Testing Analytics and data tracking in production server of appsero
In order to Run this file, Some things needs to cross check. They are
1. Login Credential of production server of appsero needs to set in autologin function named admin_production in codecept.conf.js file
2. Needs the api authorization token for logged in user. If you find this complicated then arafat vai. After you getting the token use it as default auhorization header in codecept.conf.js file.
3. This scenario can be modified according to developers need. Make changes According to that.
*/
Feature(' Initial Production ');

var payload = require('./plugin_payload');

var slugify = require('slugify');

var path = require('path');

var fs = require('fs');

var plugin_name;
var plugin_slug;
var plugin_uuid; // const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

Scenario('Appsero Fresh Plugin', function _callee(_ref) {
  var I, loginAs, mypath, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_production');
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
  var I, loginAs, i, fake_data, plugin_data, getrack, res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          I = _ref4.I, loginAs = _ref4.loginAs;
          i = 1;

        case 2:
          if (!(i <= 6)) {
            _context3.next = 13;
            break;
          }

          fake_data = payload.getFakerData();
          console.log(fake_data);
          plugin_data = payload.getPluginData();
          getrack = payload.getTrackingInfo(fake_data, plugin_uuid); // if (i % 2 == 0) {
          //     await I.sendPostRequest('/track', getrack).then((res) => {
          //         I.assertEqual(res.status, 200);
          //         console.log(res.data);
          //         if (res.status == 200) {
          //             I.wait(3);
          //             I.sendPostRequest('/deactivate', getrack).then(res => {
          //                 I.assertEqual(res.status, 200);
          //                 console.log(res.data);
          //             });
          //         }
          //     });
          // }
          //else {

          _context3.next = 9;
          return regeneratorRuntime.awrap(I.sendPostRequest('/track', getrack).then(function (res) {
            I.assertEqual(res.status, 200);
            console.log(res.data);
          }));

        case 9:
          res = _context3.sent;

        case 10:
          i++;
          _context3.next = 2;
          break;

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  });
});
Scenario('Check Plugin Connection', function _callee4(_ref5) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          I = _ref5.I, loginAs = _ref5.loginAs;
          loginAs('admin_production');
          I.Selectplugin();

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
});