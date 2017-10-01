// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/ghostusers');
//
// const Menu = require('./TestData');
// // const Item = require('./TestItem');
//
// const TestMenu = new Menu({
//   name: "Lunch"
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
//
// // function MenuItem(name, category, price, quantity) {
// //   this.name = name;
// //   this.category = category;
// //   this.price = price;
// //   this.quantity = quantity
// // }
// //
// // const menuItems = [
// //   new MenuItem('Pizza', 'Main', 10, 200),
// //   new MenuItem('Burger', 'Main', 8, 100),
// //   new MenuItem('Steak', 'Main', 13, 50),
// //   new MenuItem('Pasta', 'Main', 11, 70),
// //   new MenuItem('Escargot', 'Starter', 13, 250),
// //   new MenuItem('Calamari', 'Starter', 9, 200),
// //   new MenuItem('Carpaccio', 'Starter', 12, 30),
// //   new MenuItem('Ravioli', 'Main', 13, 90),
// //   new MenuItem('Chocolate Mousse','Dessert', 11, 76),
// //   new MenuItem('Bread Pudding','Dessert', 9, 100),
// //   new MenuItem('Creme Brulee','Dessert', 11, 120)
// // ];
// //
// // menuItems.forEach((item) => {
// //   let MenuItem = new Item(item);
// //   MenuItem.save((err, doc) => {
// //     if (err) {
// //       console.log(err);
// //     }
// //     else {
// //       Menu.findOneAndUpdate({}, {$push: {"items": doc._id}}, {new: true}, function (err, newdoc) {
// //         if (err) {
// //           console.log(err);
// //         }
// //         else {
// //           console.log(newdoc);
// //         }
// //       });
// //     }
// //   })
// // });