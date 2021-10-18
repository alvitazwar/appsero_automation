"use strict";

Feature('Appsero');
Scenario('@pro_plugin_woocommerce', function _callee(_ref) {
    var I;
    return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    I = _ref.I;
                    loginAs('admin_staging');
                    I.click('//li[2]/a[@href="/plugins"]');
                    I.see('Plugins');
                    I.click('Add Plugin');
                    I.click('.custom-button.mr-16.premium');
                    I.metadataPlugin();
                    I.metadataVersion();
                    I.metadataPHP();
                    I.metadataWordpress();
                    I.metadataTested();
                    pause();

                case 12:
                case "end":
                    return _context.stop();
            }
        }
    });
}).tag('@pro_plugin');