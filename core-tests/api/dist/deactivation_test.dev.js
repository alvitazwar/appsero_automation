"use strict";

Feature('Appsero deactivation test');
Scenario('Deactivation', function _callee(_ref) {
  var I, loginAs, data, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          data = {
            url: "http://hallie.name",
            site: "Investor Web Strategist",
            admin_email: "Alan_Walter@yahoo.com",
            first_name: "Grayce",
            last_name: "Romaguera",
            hash: "4543047e-bd71-4bc8-bcba-2dc66244678b",
            server: {
              software: "nginx/1.21.0",
              php_version: "7.4.21",
              mysql_version: "8.0.25",
              php_max_upload_size: "512 MB",
              php_default_timezone: "UTC",
              php_soap: "Yes",
              php_fsockopen: "Yes",
              php_curl: "Yes"
            },
            wp: {
              memory_limit: "40M",
              debug_mode: "Yes",
              locale: "en_US",
              version: "5.8",
              multisite: "No",
              theme_slug: "storefront",
              theme_name: "Storefront",
              theme_version: "3.6.0",
              theme_uri: "https://woocommerce.com/storefront/",
              theme_author: "Automattic"
            },
            users: {
              total: "10",
              administrator: "1",
              subscriber: "8",
              customer: "1"
            },
            active_plugins: "8",
            inactive_plugins: "5",
            ip_address: "103.108.147.143",
            project_version: "1.0",
            tracking_skipped: "0",
            reason_id: "did-not-work-as-expected",
            reason_info: null,
            client: "1.2.0"
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(I.sendPostRequest('https://api.appsero.com/deactivate', data));

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