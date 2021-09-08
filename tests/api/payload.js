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
            value: faker.random.alphaNumeric(30),
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
    getRefund(data) {
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
    getFastspringSubsorder(data) {
        var subs = {
            "events": [{
                    "id": data.value,
                    "processed": false,
                    "created": 1631076324562,
                    "type": "subscription.activated",
                    "live": false,
                    "data": {
                        "id": data.value,
                        "quote": null,
                        "subscription": data.value,
                        "active": true,
                        "state": "active",
                        "changed": 1631076324394,
                        "changedValue": 1631076324394,
                        "changedInSeconds": 1631076324,
                        "changedDisplay": "9/8/21",
                        "live": false,
                        "currency": "USD",
                        "account": "ubPfvyFUQqCgheYylaOIKw",
                        "product": "fastspring-sub-api",
                        "sku": null,
                        "display": "fastspring_sub_api",
                        "quantity": 1,
                        "adhoc": false,
                        "autoRenew": true,
                        "price": 30,
                        "priceDisplay": "$30.00",
                        "priceInPayoutCurrency": 30,
                        "priceInPayoutCurrencyDisplay": "$30.00",
                        "discount": 0,
                        "discountDisplay": "$0.00",
                        "discountInPayoutCurrency": 0,
                        "discountInPayoutCurrencyDisplay": "$0.00",
                        "subtotal": 30,
                        "subtotalDisplay": "$30.00",
                        "subtotalInPayoutCurrency": 30,
                        "subtotalInPayoutCurrencyDisplay": "$30.00",
                        "next": 1633651200000,
                        "nextValue": 1633651200000,
                        "nextInSeconds": 1633651200,
                        "nextDisplay": "10/8/21",
                        "end": null,
                        "endValue": null,
                        "endInSeconds": null,
                        "endDisplay": null,
                        "canceledDate": null,
                        "canceledDateValue": null,
                        "canceledDateInSeconds": null,
                        "canceledDateDisplay": null,
                        "deactivationDate": null,
                        "deactivationDateValue": null,
                        "deactivationDateInSeconds": null,
                        "deactivationDateDisplay": null,
                        "sequence": 1,
                        "periods": null,
                        "remainingPeriods": null,
                        "begin": 1631059200000,
                        "beginValue": 1631059200000,
                        "beginInSeconds": 1631059200,
                        "beginDisplay": "9/8/21",
                        "intervalUnit": "month",
                        "intervalLength": 1,
                        "nextChargeCurrency": "USD",
                        "nextChargeDate": 1633651200000,
                        "nextChargeDateValue": 1633651200000,
                        "nextChargeDateInSeconds": 1633651200,
                        "nextChargeDateDisplay": "10/8/21",
                        "nextChargePreTax": 30,
                        "nextChargePreTaxDisplay": "$30.00",
                        "nextChargePreTaxInPayoutCurrency": 30,
                        "nextChargePreTaxInPayoutCurrencyDisplay": "$30.00",
                        "nextChargeTotal": 30,
                        "nextChargeTotalDisplay": "$30.00",
                        "nextChargeTotalInPayoutCurrency": 30,
                        "nextChargeTotalInPayoutCurrencyDisplay": "$30.00",
                        "nextNotificationType": "PAYMENT_REMINDER",
                        "nextNotificationDate": 1633046400000,
                        "nextNotificationDateValue": 1633046400000,
                        "nextNotificationDateInSeconds": 1633046400,
                        "nextNotificationDateDisplay": "10/1/21",
                        "paymentReminder": {
                            "intervalUnit": "week",
                            "intervalLength": 1
                        },
                        "paymentOverdue": {
                            "intervalUnit": "week",
                            "intervalLength": 1,
                            "total": 4,
                            "sent": 0
                        },
                        "cancellationSetting": {
                            "cancellation": "AFTER_LAST_NOTIFICATION",
                            "intervalUnit": "week",
                            "intervalLength": 1
                        },
                        "fulfillments": null,
                        "instructions": [{
                            "product": "fastspring-sub-api",
                            "type": "regular",
                            "periodStartDate": null,
                            "periodStartDateValue": null,
                            "periodStartDateInSeconds": null,
                            "periodStartDateDisplay": null,
                            "periodEndDate": null,
                            "periodEndDateValue": null,
                            "periodEndDateInSeconds": null,
                            "periodEndDateDisplay": null,
                            "intervalUnit": "month",
                            "intervalLength": 1,
                            "discountPercent": 0,
                            "discountPercentValue": 0,
                            "discountPercentDisplay": "0%",
                            "discountTotal": 0,
                            "discountTotalDisplay": "$0.00",
                            "discountTotalInPayoutCurrency": 0,
                            "discountTotalInPayoutCurrencyDisplay": "$0.00",
                            "unitDiscount": 0,
                            "unitDiscountDisplay": "$0.00",
                            "unitDiscountInPayoutCurrency": 0,
                            "unitDiscountInPayoutCurrencyDisplay": "$0.00",
                            "price": 30,
                            "priceDisplay": "$30.00",
                            "priceInPayoutCurrency": 30,
                            "priceInPayoutCurrencyDisplay": "$30.00",
                            "priceTotal": 30,
                            "priceTotalDisplay": "$30.00",
                            "priceTotalInPayoutCurrency": 30,
                            "priceTotalInPayoutCurrencyDisplay": "$30.00",
                            "unitPrice": 30,
                            "unitPriceDisplay": "$30.00",
                            "unitPriceInPayoutCurrency": 30,
                            "unitPriceInPayoutCurrencyDisplay": "$30.00",
                            "total": 30,
                            "totalDisplay": "$30.00",
                            "totalInPayoutCurrency": 30,
                            "totalInPayoutCurrencyDisplay": "$30.00"
                        }]
                    }
                },
                {
                    "id": data.value,
                    "processed": false,
                    "created": 1631076324807,
                    "type": "order.completed",
                    "live": false,
                    "data": {
                        "order": data.value,
                        "id": data.value,
                        "reference": "WEDEVSS210908-2487-59112",
                        "buyerReference": null,
                        "ipAddress": "103.108.147.143",
                        "completed": true,
                        "changed": 1631076324592,
                        "changedValue": 1631076324592,
                        "changedInSeconds": 1631076324,
                        "changedDisplay": "9/8/21",
                        "language": "en",
                        "live": false,
                        "currency": "USD",
                        "payoutCurrency": "USD",
                        "quote": null,
                        "invoiceUrl": "https://alvitazwar.test.onfastspring.com/account/order/WEDEVSS210908-2487-59112/invoice/IV7K4JZM2MIZDB7E7APNK5AAPWMM",
                        "account": "ubPfvyFUQqCgheYylaOIKw",
                        "total": 30,
                        "totalDisplay": "$30.00",
                        "totalInPayoutCurrency": 30,
                        "totalInPayoutCurrencyDisplay": "$30.00",
                        "tax": 0,
                        "taxDisplay": "$0.00",
                        "taxInPayoutCurrency": 0,
                        "taxInPayoutCurrencyDisplay": "$0.00",
                        "subtotal": 30,
                        "subtotalDisplay": "$30.00",
                        "subtotalInPayoutCurrency": 30,
                        "subtotalInPayoutCurrencyDisplay": "$30.00",
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
                                "account": data.value,
                                "address": {
                                    "country": "BD",
                                    "display": "BD"
                                }
                            }
                        }],
                        "notes": [],
                        "items": [{
                            "product": "fastspring-sub-api",
                            "quantity": 1,
                            "display": "fastspring_sub_api",
                            "sku": null,
                            "imageUrl": null,
                            "subtotal": 30,
                            "subtotalDisplay": "$30.00",
                            "subtotalInPayoutCurrency": 30,
                            "subtotalInPayoutCurrencyDisplay": "$30.00",
                            "discount": 0,
                            "discountDisplay": "$0.00",
                            "discountInPayoutCurrency": 0,
                            "discountInPayoutCurrencyDisplay": "$0.00",
                            "subscription": data.value,
                            "fulfillments": {}
                        }]
                    }
                }
            ]
        }

        return subs;
    },
    getFastspringSubreturn(data) {
        var subs = {
            "events": [{
                    "id": data.value,
                    "processed": false,
                    "created": 1631084541200,
                    "type": "subscription.deactivated",
                    "live": false,
                    "data": {
                        "id": data.value,
                        "quote": null,
                        "subscription": data.value,
                        "active": false,
                        "state": "deactivated",
                        "changed": 1631084541191,
                        "changedValue": 1631084541191,
                        "changedInSeconds": 1631084541,
                        "changedDisplay": "9/8/21",
                        "live": false,
                        "currency": "USD",
                        "account": "LitnPVXuSr2muy9--VOZdw",
                        "product": "fastspring-sub-api",
                        "sku": null,
                        "display": "fastspring_sub_api",
                        "quantity": 1,
                        "adhoc": false,
                        "autoRenew": true,
                        "price": 30,
                        "priceDisplay": "$30.00",
                        "priceInPayoutCurrency": 30,
                        "priceInPayoutCurrencyDisplay": "$30.00",
                        "discount": 0,
                        "discountDisplay": "$0.00",
                        "discountInPayoutCurrency": 0,
                        "discountInPayoutCurrencyDisplay": "$0.00",
                        "subtotal": 30,
                        "subtotalDisplay": "$30.00",
                        "subtotalInPayoutCurrency": 30,
                        "subtotalInPayoutCurrencyDisplay": "$30.00",
                        "next": 1633651200000,
                        "nextValue": 1633651200000,
                        "nextInSeconds": 1633651200,
                        "nextDisplay": "10/8/21",
                        "end": 1631059200000,
                        "endValue": 1631059200000,
                        "endInSeconds": 1631059200,
                        "endDisplay": "9/8/21",
                        "canceledDate": 1631059200000,
                        "canceledDateValue": 1631059200000,
                        "canceledDateInSeconds": 1631059200,
                        "canceledDateDisplay": "9/8/21",
                        "deactivationDate": null,
                        "deactivationDateValue": null,
                        "deactivationDateInSeconds": null,
                        "deactivationDateDisplay": null,
                        "sequence": 1,
                        "periods": 0,
                        "remainingPeriods": 0,
                        "begin": 1631059200000,
                        "beginValue": 1631059200000,
                        "beginInSeconds": 1631059200,
                        "beginDisplay": "9/8/21",
                        "intervalUnit": "month",
                        "intervalLength": 1,
                        "paymentReminder": {
                            "intervalUnit": "week",
                            "intervalLength": 1
                        },
                        "paymentOverdue": {
                            "intervalUnit": "week",
                            "intervalLength": 1,
                            "total": 4,
                            "sent": 0
                        },
                        "cancellationSetting": {
                            "cancellation": "AFTER_LAST_NOTIFICATION",
                            "intervalUnit": "week",
                            "intervalLength": 1
                        },
                        "fulfillments": {},
                        "instructions": [{
                            "product": "fastspring-sub-api",
                            "type": "regular",
                            "periodStartDate": null,
                            "periodStartDateValue": null,
                            "periodStartDateInSeconds": null,
                            "periodStartDateDisplay": null,
                            "periodEndDate": 1631059200000,
                            "periodEndDateValue": 1631059200000,
                            "periodEndDateInSeconds": 1631059200,
                            "periodEndDateDisplay": "9/8/21",
                            "intervalUnit": "month",
                            "intervalLength": 1,
                            "discountPercent": 0,
                            "discountPercentValue": 0,
                            "discountPercentDisplay": "0%",
                            "discountTotal": 0,
                            "discountTotalDisplay": "$0.00",
                            "discountTotalInPayoutCurrency": 0,
                            "discountTotalInPayoutCurrencyDisplay": "$0.00",
                            "unitDiscount": 0,
                            "unitDiscountDisplay": "$0.00",
                            "unitDiscountInPayoutCurrency": 0,
                            "unitDiscountInPayoutCurrencyDisplay": "$0.00",
                            "price": 30,
                            "priceDisplay": "$30.00",
                            "priceInPayoutCurrency": 30,
                            "priceInPayoutCurrencyDisplay": "$30.00",
                            "priceTotal": 30,
                            "priceTotalDisplay": "$30.00",
                            "priceTotalInPayoutCurrency": 30,
                            "priceTotalInPayoutCurrencyDisplay": "$30.00",
                            "unitPrice": 30,
                            "unitPriceDisplay": "$30.00",
                            "unitPriceInPayoutCurrency": 30,
                            "unitPriceInPayoutCurrencyDisplay": "$30.00",
                            "total": 30,
                            "totalDisplay": "$30.00",
                            "totalInPayoutCurrency": 30,
                            "totalInPayoutCurrencyDisplay": "$30.00"
                        }]
                    }
                },

                {
                    "id": data.value,
                    "processed": false,
                    "created": 1631084541359,
                    "type": "return.created",
                    "live": false,
                    "data": {
                        "return": data.value,
                        "quote": null,
                        "reference": "WEDEVSS210908-7784-66115X",
                        "completed": true,
                        "changed": 1631084540929,
                        "changedValue": 1631084540929,
                        "changedInSeconds": 1631084540,
                        "changedDisplay": "9/8/21",
                        "live": false,
                        "account": "LitnPVXuSr2muy9--VOZdw",
                        "currency": "USD",
                        "payoutCurrency": "USD",
                        "totalReturn": 30,
                        "totalReturnDisplay": "$30.00",
                        "totalReturnInPayoutCurrency": 30,
                        "totalReturnInPayoutCurrencyDisplay": "$30.00",
                        "tax": 0,
                        "taxDisplay": "$0.00",
                        "taxInPayoutCurrency": 0,
                        "taxInPayoutCurrencyDisplay": "$0.00",
                        "subtotal": 30,
                        "subtotalDisplay": "$30.00",
                        "subtotalInPayoutCurrency": 30,
                        "subtotalInPayoutCurrencyDisplay": "$30.00",
                        "totalRefundInPayoutCurrency": 30,
                        "payment": {
                            "type": "test",
                            "cardEnding": "4242"
                        },
                        "reason": "Product Not As Expected",
                        "note": "",
                        "type": "RETURN",
                        "original": {
                            "id": data.value,
                            "order": data.value,
                            "reference": "WEDEVSS210908-5720-79106",
                            "account": "LitnPVXuSr2muy9--VOZdw",
                            "currency": "USD",
                            "payoutCurrency": "USD",
                            "total": 30,
                            "totalDisplay": "$30.00",
                            "totalInPayoutCurrency": 30,
                            "totalInPayoutCurrencyDisplay": "$30.00",
                            "tax": 0,
                            "taxDisplay": "$0.00",
                            "taxInPayoutCurrency": 0,
                            "taxInPayoutCurrencyDisplay": "$0.00",
                            "subtotal": 30,
                            "subtotalDisplay": "$30.00",
                            "subtotalInPayoutCurrency": 30,
                            "subtotalInPayoutCurrencyDisplay": "$30.00",
                            "notes": [],
                            "subscriptions": [
                                data.value
                            ]
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
                            "product": "fastspring-sub-api",
                            "quantity": 1,
                            "display": "fastspring_sub_api",
                            "sku": null,
                            "subtotal": 30,
                            "subtotalDisplay": "$30.00",
                            "subtotalInPayoutCurrency": 30,
                            "subtotalInPayoutCurrencyDisplay": "$30.00",
                            "subscription": data.value
                        }]
                    }
                }
            ]
        }
        return subs;
    },
    getPartialReturn(data) {
        var partial = {
            "events": [{
                    "id": data.value,
                    "processed": false,
                    "created": 1631092446792,
                    "type": "return.created",
                    "live": false,
                    "data": {
                        "return": data.value,
                        "quote": null,
                        "reference": "WEDEVSS210908-7784-57119X",
                        "completed": true,
                        "changed": 1631092446656,
                        "changedValue": 1631092446656,
                        "changedInSeconds": 1631092446,
                        "changedDisplay": "9/8/21",
                        "live": false,
                        "account": "iNGMjK4yR0K6DENUc2eTkA",
                        "currency": "USD",
                        "payoutCurrency": "USD",
                        "totalReturn": 15,
                        "totalReturnDisplay": "$15.00",
                        "totalReturnInPayoutCurrency": 15,
                        "totalReturnInPayoutCurrencyDisplay": "$15.00",
                        "tax": 0,
                        "taxDisplay": "$0.00",
                        "taxInPayoutCurrency": 0,
                        "taxInPayoutCurrencyDisplay": "$0.00",
                        "subtotal": 15,
                        "subtotalDisplay": "$15.00",
                        "subtotalInPayoutCurrency": 15,
                        "subtotalInPayoutCurrencyDisplay": "$15.00",
                        "totalRefundInPayoutCurrency": 15,
                        "payment": {
                            "type": "test",
                            "cardEnding": "4242"
                        },
                        "reason": "Product Not As Expected",
                        "note": "",
                        "type": "RETURN",
                        "original": {
                            "id": data.value,
                            "order": data.value,
                            "reference": "WEDEVSS210908-5720-35132",
                            "account": "iNGMjK4yR0K6DENUc2eTkA",
                            "currency": "USD",
                            "payoutCurrency": "USD",
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
                            "quantity": 0,
                            "display": "Test_ fastspring Return",
                            "sku": null,
                            "subtotal": 15,
                            "subtotalDisplay": "$15.00",
                            "subtotalInPayoutCurrency": 15,
                            "subtotalInPayoutCurrencyDisplay": "$15.00"
                        }]
                    }
                },
                {
                    "id": data.value,
                    "processed": false,
                    "created": 1631092446786,
                    "type": "payoutEntry.created",
                    "live": false,
                    "data": {
                        "return": data.value,
                        "account": "iNGMjK4yR0K6DENUc2eTkA",
                        "live": false,
                        "subscriptions": [],
                        "subtractions": {
                            "tax": {
                                "amount": 0,
                                "percentage": 0
                            },
                            "fastspring": {
                                "amount": 0,
                                "percentage": 0
                            }
                        },
                        "subtotal": -15,
                        "payouts": [{
                            "payee": "wedevss",
                            "currency": "USD",
                            "payout": "-15.00",
                            "totalReturn": "-15.00"
                        }]
                    }
                }
            ]
        }
        return partial;
    },
}