const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ghostusers');

const Menu = require('./TestData');
const Item = require('./TestItem');
const OrderItem = require('./TestOrderItem');

// const TestMenu = new Menu({
//   name: "lunch"
// });
//
// TestMenu.save((err, doc) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(doc);
//   }
// });

function MenuItem(name, category, price, quantity) {
  this.name = name;
  this.category = category;
  this.price = price;
  this.quantity = quantity
}

function OrderItems(name, category, price, quantity) {
  this.name = name;
  this.category = category;
  this.price = price;
  this.quantity = quantity;
}

const orderItems = [
  new OrderItems("Pizza", "main", 10, 2),
  new OrderItems("Pasta", "starter", 13, 2)
]

const menuItems = [
  new MenuItem('Pizza', 'main', 10, 200),
  new MenuItem('Burger', 'main', 8, 100),
  new MenuItem('Steak', 'main', 13, 50),
  new MenuItem('Pasta', 'main', 11, 70),
  new MenuItem('Escargot', 'starter', 13, 250),
  new MenuItem('Calamari', 'starter', 9, 200),
  new MenuItem('Carpaccio', 'starter', 12, 30),
  new MenuItem('Ravioli', 'main', 13, 90),
  new MenuItem('Chocolate Mousse','dessert', 11, 76),
  new MenuItem('Bread Pudding','dessert', 9, 100),
  new MenuItem('Creme Brulee','dessert', 11, 120)
];

menuItems.forEach((item) => {
  let MenuItem = new Item(item);
  MenuItem.save((err, doc) => {
    if (err) {
      console.log(err);
    }
    else {
      Menu.findOneAndUpdate({}, {$push: {"items": doc._id}}, {new: true}, function (err, newdoc) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(newdoc);
        }
      });
    }
  })
});

orderItems.forEach((item) => {
  let OrderItems = new OrderItem(item);
  OrderItems.save((err, doc) => {
    if (err) {
      console.log(err);
    }
    else {
      Menu.findOneAndUpdate({}, {$push: {"orderedItems": doc._id}}, {new: true}, function (err, newdoc) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(newdoc);
        }
      });
    }
  })
});