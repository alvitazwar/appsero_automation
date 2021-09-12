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
  getPaddlesSingleOrder: function getPaddlesSingleOrder(data) {
    var singleorder = {
      "alert_id": data.value,
      "alert_name": "payment_succeeded",
      "balance_currency": "USD",
      "balance_earnings": "27.9",
      "balance_fee": "7.6",
      "balance_gross": "35.5",
      "balance_tax": "0",
      "checkout_id": data.value,
      "country": "BD",
      "coupon": "",
      "currency": "USD",
      "customer_name": data.fname,
      "earnings": "27.9",
      "email": data.email,
      "event_time": "2021-09-10+06%3A46%3A31",
      "fee": "7.6",
      "ip": "",
      "marketing_consent": "0",
      "order_id": data.value,
      "passthrough": "",
      "payment_method": "card",
      "payment_tax": "0",
      "product_id": "16122",
      "product_name": "paddle-single-order-purchase",
      "quantity": "1",
      "receipt_url": "http%3A%2F%2Fsandbox-my.paddle.com%2Freceipt%2F157199%2F261947-chre75087989fd4-7b75567c92",
      "sale_gross": "35.5",
      "used_price_override": "0"
    };
    return singleorder;
  },
  getSubsPaymentSucceed: function getSubsPaymentSucceed(data) {
    var paysucceed = {
      "alert_id": data.value,
      "alert_name": "subscription_payment_succeeded",
      "balance_currency": "USD",
      "balance_earnings": "28",
      "balance_fee": "2",
      "balance_gross": "30",
      "balance_tax": "0",
      "checkout_id": data.value,
      "country": "BD",
      "coupon": "",
      "currency": "USD",
      "customer_name": data.fname,
      "earnings": "28",
      "email": data.email,
      "event_time": "2021-09-10+11%3A23%3A21",
      "fee": "2",
      "initial_payment": "1",
      "instalments": "1",
      "marketing_consent": "0",
      "next_bill_date": "2021-09-11",
      "next_payment_amount": "30",
      "order_id": data.value,
      "passthrough": "",
      "payment_method": "card",
      "payment_tax": "0",
      "plan_name": "subs_paddle",
      "quantity": "1",
      "receipt_url": "http%3A%2F%2Fsandbox-my.paddle.com%2Freceipt%2F157346-765528%2F262302-chre73cc504e239-ada51317a9",
      "sale_gross": "30",
      "status": "active",
      "subscription_id": data.value,
      "subscription_payment_id": data.value,
      "subscription_plan_id": data.value,
      "unit_price": "30.00",
      "user_id": data.value
    };
    return paysucceed;
  },
  getSubsCreateOrder: function getSubsCreateOrder(data) {
    var subsorder = {
      "alert_id": data.value,
      "alert_name": "subscription_created",
      "cancel_url": "https%3A%2F%2Fsandbox-checkout.paddle.com%2Fsubscription%2Fcancel%3Fuser%3D48411%26subscription%3D135130%26hash%3Df1657702349f61bebab99dcbc4a7c49cd00aed232c76e648c0e87cd66944bd5d",
      "checkout_id": data.value,
      "currency": "USD",
      "email": data.email,
      "event_time": "2021-09-10+11%3A23%3A21",
      "linked_subscriptions": "",
      "marketing_consent": "0",
      "next_bill_date": "2021-09-11",
      "passthrough": "",
      "quantity": "1",
      "source": "sandbox-buy.paddle.com",
      "status": "active",
      "subscription_id": data.value,
      "subscription_plan_id": "16134",
      "unit_price": "30.00",
      "update_url": "https%3A%2F%2Fsandbox-checkout.paddle.com%2Fsubscription%2Fupdate%3Fuser%3D48411%26subscription%3D135130%26hash%3D92e943016f3cd320dc15e74d2646868bdb421efa6ecd1d1a543bae387180c01a",
      "user_id": data.value
    };
    return subsorder;
  }
};