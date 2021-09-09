"use strict";

var faker = require('faker');

var _inject = inject(),
    I = _inject.I;

module.exports = {
  getFakerData: function getFakerData() {
    return data = {
      url: faker.internet.url(),
      site: faker.name.title(),
      email: faker.internet.email(),
      fname: faker.name.firstName(),
      lname: faker.name.lastName(),
      value: faker.random.alphaNumeric(30),
      phone: faker.phone.phoneNumber()
    };
  },
  getTrackingInfo: function getTrackingInfo(data) {
    var track = {
      "url": data.url,
      "site": data.site,
      "admin_email": data.email,
      "first_name": data.fname,
      "last_name": data.lname,
      "hash": "fd45dfd4-255d-432c-82fe-255e881dc1e8",
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
    return track;
  }
};