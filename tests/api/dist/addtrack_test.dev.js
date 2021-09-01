"use strict";

var faker = require('faker');

Feature('Add Tracking');
Scenario('Login Successfull', function _callee(_ref) {
  var I, url, site, email, fname, lname, data, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          url = faker.internet.url();
          site = faker.name.title();
          email = faker.internet.email();
          fname = faker.name.firstName();
          lname = faker.name.lastName();
          data = {
            "url": url,
            "site": site,
            "admin_email": email,
            "first_name": fname,
            "last_name": lname,
            "hash": "c0492353-38aa-47b6-80ee-4e64ae077a4e",
            "server": {
              "software": "LiteSpeed/1.24",
              "php_version": "7.4.1-ubuntu",
              "mysql_version": "8.5.3-release",
              "php_max_upload_size": "120 MB",
              "php_default_timezone": "UTC",
              "php_soap": "No",
              "php_fsockopen": "Yes",
              "php_curl": "Yes"
            },
            "wp": {
              "memory_limit": "256M",
              "debug_mode": "Yes",
              "locale": "en_US",
              "version": "5.7-alpha-release-ch3",
              "multisite": "No",
              "theme_slug": "goblog-free",
              "theme_name": "Goblog Free",
              "theme_version": "3.1.1",
              "theme_uri": "https://gothemeshop.com/theme-wordpress-goblog-free/",
              "theme_author": "Yuky Hendiawan"
            },
            "users": {
              "total": "2",
              "administrator": "1",
              "subscriber": "1"
            },
            "active_plugins": "8",
            "inactive_plugins": "5",
            "ip_address": "2a01:4f8:10a:3a5c::2",
            "project_version": "1.7.2",
            "tracking_skipped": "0",
            "reason_id": "not-have-that-feature",
            "reason_info": null,
            "client": "1.2.0"
          };
          _context.next = 9;
          return regeneratorRuntime.awrap(I.sendPostRequest('https://api.appsero.com/track', data));

        case 9:
          res = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(I.assertEqual(res.status, 200));

        case 12:
          console.log(res.data);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
});