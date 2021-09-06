var faker = require('faker');
const {
    I
} = inject();

module.exports = {
    getFakerData() {
        return data = {
            url: faker.internet.url(),
            site: faker.name.title(),
            email: faker.internet.email(),
            fname: faker.name.firstName(),
            lname: faker.name.lastName(),
            value: faker.random.alphaNumeric(),
            phone: faker.phone.phoneNumber(),
        }

    },
    getTrackingInfo(data) {
        var track = {
            "url": data.url,
            "site": data.site,
            "admin_email": data.email,
            "first_name": data.fname,
            "last_name": data.lname,
            "hash": "95821e3e-d772-4a24-9057-fb3930423973",
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
        }
        return track;
    },
    getFastSpringOrder(data) {
        var order = {
            "events": [{
                "id": data.value,
                "processed": false,
                "created": 1630912357100,
                "type": "order.completed",
                "live": false,
                "data": {
                    "order": data.value,
                    "id": data.value,
                    "reference": "WEDEVSS210906-5720-90142",
                    "buyerReference": null,
                    "ipAddress": "103.108.147.143",
                    "completed": true,
                    "changed": 1630648197312,
                    "changedValue": 1630648197312,
                    "changedInSeconds": 1630648197,
                    "changedDisplay": "9/3/21",
                    "language": "en",
                    "live": false,
                    "currency": "USD",
                    "payoutCurrency": "USD",
                    "quote": null,
                    "invoiceUrl": "https://alvitazwar.test.onfastspring.com/account/order/WEDEVSS210903-5720-29143/invoice/IVONEM5PBX5FBYHD5V6VDWTZIDD4",
                    "account": "ubPfvyFUQqCgheYylaOIKw",
                    "total": 20,
                    "totalDisplay": "$20.00",
                    "totalInPayoutCurrency": 20,
                    "totalInPayoutCurrencyDisplay": "$20.00",
                    "tax": 0,
                    "taxDisplay": "$0.00",
                    "taxInPayoutCurrency": 0,
                    "taxInPayoutCurrencyDisplay": "$0.00",
                    "subtotal": 20,
                    "subtotalDisplay": "$20.00",
                    "subtotalInPayoutCurrency": 20,
                    "subtotalInPayoutCurrencyDisplay": "$20.00",
                    "discount": 0,
                    "discountDisplay": "$0.00",
                    "discountInPayoutCurrency": 0,
                    "discountInPayoutCurrencyDisplay": "$0.00",
                    "discountWithTax": 0,
                    "discountWithTaxDisplay": "$0.00",
                    "discountWithTaxInPayoutCurrency": 0,
                    "discountWithTaxInPayoutCurrencyDisplay": "$0.00",
                    "billDescriptor": "FS* fsprg.com",
                    "payment": {
                        "type": "test",
                        "cardEnding": "4242"
                    },
                    "customer": {
                        "first": data.fname,
                        "last": data.lname,
                        "email": data.email,
                        "company": null,
                        "phone": data.phone,
                        "subscribed": true
                    },
                    "address": {
                        "country": "BD",
                        "display": "BD"
                    },
                    "recipients": [{
                        "recipient": {
                            "first": data.fname,
                            "last": data.lname,
                            "email": data.email,
                            "company": null,
                            "phone": data.phone,
                            "subscribed": true,
                            "account": "ubPfvyFUQqCgheYylaOIKw",
                            "address": {
                                "country": "BD",
                                "display": "BD"
                            }
                        }
                    }],
                    "notes": [],
                    "items": [{
                        "product": "test-fastspring-return",
                        "path": "test-fastspring-return",
                        "quantity": 1,
                        "display": "Test_ fastspring Return",
                        "summary": null,
                        "imageUrl": null,
                        "isVirtual": false,
                        "isSubscription": false,
                        "price": 20,
                        "variation": "test-fastspring-return",
                        "description": "Test_ fastspring Return",
                        "sku": null,
                        "pricing": {
                            "values": {
                                "USD": 20
                            }
                        }
                    }]
                }
            }]
        }
        return order;

    },
    getRefund() {
        var ref = {
            "events": [{
                "id": data.value,
                "processed": false,
                "created": 1630909334894,
                "type": "return.created",
                "live": false,
                "data": {
                    "return": "XJ1171ScQAGoV2TiMsWQgg",
                    "quote": null,
                    "reference": "WEDEVSS210906-7784-86126X",
                    "completed": true,
                    "changed": 1630909334539,
                    "changedValue": 1630909334539,
                    "changedInSeconds": 1630909334,
                    "changedDisplay": "9/6/21",
                    "live": false,
                    "account": "pBWCtTIfSRKbKmos4_TrbA",
                    "currency": "USD",
                    "payoutCurrency": "USD",
                    "totalReturn": 20,
                    "totalReturnDisplay": "$20",
                    "totalReturnInPayoutCurrency": 20,
                    "totalReturnInPayoutCurrencyDisplay": "$20",
                    "tax": 0,
                    "taxDisplay": "$0.00",
                    "taxInPayoutCurrency": 0,
                    "taxInPayoutCurrencyDisplay": "$0.00",
                    "subtotal": 20,
                    "subtotalDisplay": "$20",
                    "subtotalInPayoutCurrency": 20,
                    "subtotalInPayoutCurrencyDisplay": "$20",
                    "totalRefundInPayoutCurrency": 20,
                    "payment": {
                        "type": "test",
                        "cardEnding": "4242"
                    },
                    "reason": "Compatibility Issues",
                    "note": "",
                    "type": "RETURN",
                    "original": {
                        "id": data.value,
                        "order": data.value,
                        "reference": "WEDEVSS210906-5720-79124",
                        "account": "pBWCtTIfSRKbKmos4_TrbA",
                        "currency": "USD",
                        "payoutCurrency": "USD",
                        "total": 20,
                        "totalDisplay": "$20",
                        "totalInPayoutCurrency": 20,
                        "totalInPayoutCurrencyDisplay": "$20",
                        "tax": 0,
                        "taxDisplay": "$0.00",
                        "taxInPayoutCurrency": 0,
                        "taxInPayoutCurrencyDisplay": "$0.00",
                        "subtotal": 20,
                        "subtotalDisplay": "$20",
                        "subtotalInPayoutCurrency": 20,
                        "subtotalInPayoutCurrencyDisplay": "$20",
                        "notes": []
                    },
                    "customer": {
                        "first": data.fname,
                        "last": data.lname,
                        "email": data.email,
                        "company": null,
                        "phone": data.phone,
                        "subscribed": true
                    },
                    "items": [{
                        "product": "test-fastspring-return",
                        "quantity": 1,
                        "display": "Test_ fastspring Return",
                        "sku": null,
                        "imageUrl": null,
                        "subtotal": 20,
                        "subtotalDisplay": "$20.00",
                        "subtotalInPayoutCurrency": 20,
                        "subtotalInPayoutCurrencyDisplay": "$20.00",
                        "discount": 0,
                        "discountDisplay": "$0.00",
                        "discountInPayoutCurrency": 0,
                        "discountInPayoutCurrencyDisplay": "$0.00",
                        "fulfillments": {}
                    }]
                }
            }]
        }
        return ref;
    },


}