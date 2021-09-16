"use strict";

var faker = require('faker');

var slugify = require('slugify');

var _inject = inject(),
    I = _inject.I;

module.exports = {
  getTrackingInfo: function getTrackingInfo(data) {
    var track = {
      "url": data.url,
      "site": data.site,
      "admin_email": data.email,
      "first_name": data.fname,
      "last_name": data.lname,
      "hash": "23140ebb-d13f-4ec8-814e-a2d4ed55e942",
      "server": this.getServerData(data),
      "wp": this.getWordpressData(data),
      "users": this.getUsersData(),
      "active_plugins": "8",
      "inactive_plugins": "5",
      "ip_address": "2a01:4f8:10a:3a5c::2",
      "project_version": "1.7.2",
      "tracking_skipped": "0",
      "reason_id": "not-have-that-feature",
      "reason_info": null,
      "client": "1.2.0",
      "plugins": this.getPluginData(5)
    };
    return track;
  },
  getFakerData: function getFakerData() {
    return {
      url: faker.internet.url(),
      site: faker.name.title(),
      email: faker.internet.email(),
      fname: faker.name.firstName(),
      lname: faker.name.lastName(),
      value: faker.random.alphaNumeric(30),
      phone: faker.phone.phoneNumber(),
      // software: ,
      php_version: faker.random.arrayElement(["7.4.1-ubuntu", "7.4.7-ubuntu", "5.4.3-ubuntu"]),
      my_sql: faker.random.arrayElement(["8.5.3-release", "8.4.1-release", "4.5.5-release"]),
      size: faker.random.arrayElement(["120 MB", "240 MB", "256 MB", "512 MB"]),
      yes_no: faker.random.arrayElement(["No", "Yes"]),
      theme_version: faker.datatype["float"]({
        min: 3.0,
        max: 7.0
      }).toFixed(2)
    };
  },
  getServerData: function getServerData(data) {
    return {
      "software": faker.random.arrayElement(["LiteSpeed/1.24", "nginxd/1.25", "apache/1.27"]),
      "php_version": data.php_version,
      "mysql_version": data.mysql_version,
      "php_max_upload_size": data.size,
      "php_default_timezone": "UTC",
      "php_soap": data.yes_no,
      "php_fsockopen": data.yes_no,
      "php_curl": data.yes_no
    };
  },
  getWordpressData: function getWordpressData(data) {
    return {
      "memory_limit": data.size,
      "debug_mode": data.yes_no,
      "locale": "en_US",
      "version": faker.datatype["float"]({
        min: 7.0,
        max: 8.0
      }).toFixed(1),
      "multisite": data.yes_no,
      "theme_slug": "goblog-free",
      "theme_name": "Goblog Free",
      "theme_version": data.theme_version,
      "theme_uri": data.url,
      "theme_author": faker.name.firstName()
    };
  },
  getUsersData: function getUsersData() {
    return {
      "total": faker.datatype.number({
        min: 2,
        max: 10
      }),
      "administrator": faker.datatype.number({
        min: 2,
        max: 10
      }),
      "subscriber": faker.datatype.number({
        min: 2,
        max: 10
      })
    };
  },
  getPluginData: function getPluginData(total) {
    var data = {};

    for (var i = 0; i < total; i++) {
      var pname = faker.name.firstName();
      var slug = slugify(pname);
      data[slug] = {
        name: pname,
        version: faker.random.arrayElement(["1.2", "1.5", "2.1"])
      };
    }

    return data;
  }
};