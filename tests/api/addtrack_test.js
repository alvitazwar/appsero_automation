var faker = require('faker');
Feature('Add Tracking');

Scenario('Login Successfull', async({ I }) => {
    let url = faker.internet.url();
    let site = faker.name.title();
    let email = faker.internet.email();
    let fname = faker.name.firstName();
    let lname = faker.name.lastName();
    var data = {
        "url": url,
        "site": site,
        "admin_email": email,
        "first_name": fname,
        "last_name": lname,
        "hash": "d1a0129b-2049-4922-8133-ad300a9dd887",
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
    const res = await I.sendPostRequest('https://api.appsero.com/track', data);
    await I.assertEqual(res.status, 200);
    console.log(res.data);

});