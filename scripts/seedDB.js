const mongoose = require("mongoose");
const Menu = require("../models/Menu");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below
// Helpers:
//  date: new Date(Date.now())

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ghost-grub",
  {
    useMongoClient: true
  }
);

const menuSeed = [
  {
    menuType: "Breakfast",
    menuSection: "Starters",
    itemName: "Fruit Cup",
    itemDescription: "Fruit Cup",
    itemPrice: 4.95,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
  {
    menuType: "Breakfast",
    menuSection: "Starters",
    itemName: "Oatmeal",
    itemDescription: "Steel Cut Oatmeal",
    itemPrice: 6.00,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
  {
    menuType: "Breakfast",
    menuSection: "Meals",
    itemName: "Eggs and Bacon",
    itemDescription: "4 eggs and 4 bacon",
    itemPrice: 9.50,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
  {
    menuType: "Breakfast",
    menuSection: "Meals",
    itemName: "Pancakes and Bacon",
    itemDescription: "A large stack of pancakes and 4 strips of bacon",
    itemPrice: 12.00,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
  {
    menuType: "Lunch",
    menuSection: "Appetisers",
    itemName: "Smothered Fries",
    itemDescription: "Fries smothered in you choice of cheese and/or chili",
    itemPrice: 4.95,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
  {
    menuType: "Lunch",
    menuSection: "Sandwiches",
    itemName: "The Big Burger",
    itemDescription: "1/4 pound burger",
    itemPrice: 8.95,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
  {
    menuType: "Lunch",
    menuSection: "Sandwiches",
    itemName: "Chicken Salad",
    itemDescription: "House made chicken salad on your choice of bread",
    itemPrice: 8.95,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
  {
    menuType: "Dinner",
    menuSection: "Appetisers",
    itemName: "Smoked Oysters",
    itemDescription: "Oysters smoked our own special way",
    itemPrice: 4.95,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
  {
    menuType: "Dinner",
    menuSection: "Pasta",
    itemName: "Lasagna",
    itemDescription: "Italian speciality of the house",
    itemPrice: 18.95,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
  {
    menuType: "Dinner",
    menuSection: "Meals",
    itemName: "Southern Home",
    itemDescription: "Fried chicken with 2 sides",
    itemPrice: 18.95,
    img: "",
    available: true,
    special: false,
    deleted: false
  },
];

Menu
  .remove({})
  .then(() => Menu.collection.insertMany(menuSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
