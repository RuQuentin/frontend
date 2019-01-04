'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.countTotalPrice = function(order) {
    for (const key in order) {
      this.totalPrice += order[key] * this.products[key];
    }
  }

  this.getCustomerMoney = function() {
    do {
      this.customerMoney = prompt(`Стоимость Вашего заказа - ${this.totalPrice}грн.`);
    } while (this.customerMoney !== null && this.customerMoney < this.totalPrice)
  }

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
  }

  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  }

  this.serve = function(order) {
    this.countTotalPrice(order);
    this.getCustomerMoney();
    this.countChange();

    console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`)
    
    this.reset()
  }
};

const quentin = new Cashier('Quentin', products);

quentin.serve(order)
// console.log(a);