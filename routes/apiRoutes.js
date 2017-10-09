const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const Menu = require('../models/Menu');
const Item = require('../models/Item');
const User = require('../models/User');
const cloudinary = require('cloudinary');
const Cart = require('../models/Cart');

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/fail');
  }
};

router.get('/current_user', (req, res) => {
  console.log(req.session);
  let user;
  if (req.user)
    user = req.user && {
      ...req.user._doc,
      password: null
    };
  console.log(user);
  if (req.user) {
    res.send(user);
  } else {
    res.send('')
  }
});

router.get('/menu', (req, res) => {
  Item
    .find({category: 'starter', available: false})
    .then((doc) => {
      console.log(doc)
      res.send(doc)
    })
});

router.get('/menu/:cat', (req, res) => {
  Item
    .find({category: req.params.cat, available: true})
    .then((doc) => {
      console.log(doc)
      res.send(doc)
    })
});

router.get('/menu/admin/:cat', (req, res) => {
  Item
    .find({category: req.params.cat})
    .then((doc) => {
      console.log(doc);
      res.send(doc)
    })
});

router.post('/menu/admin/update/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  Item.update({_id: req.params.id}, {available: req.body.available}, (err, item) => {
    if (err)
      console.log(err);
    Item
      .find({category: req.body.category})
      .then((doc) => {
        res.send(doc)
      })
  });
});

router.post('/add_cart/:id', (req, res) => {
  let itemId = req.params.id;
  let qty = req.body.qty;
  let text = req.body.text;
  let sides = req.body.sides ? req.body.sides : [];
  console.log(req.body);
  User.findById(req.body.userId, (err, user) => {
    req.session.cart = user.cart ? JSON.parse(req.user.cart) : {};
    let cart = new Cart(req.session.cart);
    Item.findById(itemId, (err, item) => {
      if (err)
        console.log(err);
      let myItem = {
        id: item.id,
        name: item.name,
        qty: Number(qty),
        sides: sides.sort(),
        text,
        price: item.price
      };
      cart.addToCart(myItem);
      req.session.cart = cart;
      console.log(cart);
      User.update({_id: req.body.userId}, {cart: JSON.stringify(req.session.cart)}, (err, item) => {
        if (err)
          console.log(err);
        console.log(item);
      });
      res.send(req.session.cart)
    })
  })
});

router.post('/edit_cart/:id', (req, res) => {
  let itemId = req.params.id;
  let qty = req.body.qty;
  let text = req.body.text;
  let sides = req.body.sides;
  User.findById(req.user.id, (err, user) => {
    let cart = JSON.parse(user.cart);
    let totalQty = 0;
    let totalPrice = 0;
    cart.items.forEach((item, i) => {
      if (item.id === itemId && item.sides.join('') === sides.join('') && item.text === text) {
        cart.items[i].qty = qty;
      }
      totalQty += cart.items[i].qty;
      totalPrice += cart.items[i].qty * cart.items[i].price;
    });
    cart.totalPrice = totalPrice;
    cart.totalQty = totalQty;
    req.session.cart = cart;
    User.findOneAndUpdate({_id: user.id}, {$set: {cart: JSON.stringify(cart)}}, function (err, user) {
      if (err) {
        console.log(err);
      }
      res.send(req.session.cart);
    });
  });
});

router.get('/cart', (req, res) => {
  res.send(req.user ? req.user.cart : {})
});

router.post('/menu_form',
  multer({
    dest: './uploads/'
  }).single('avatar'),
  (req, res) => {
    cloudinary.uploader.upload(req.file.path, result => {
      let image = result.secure_url;
      let menuItem = {
        ...req.body,
        image,
        category: req.body.category.toLowerCase(),
        available: !!Number(req.body.available)
      };
      let newItem = new Item(menuItem);
      newItem.save((err, item) => {
        console.log(item);
        Item
          .find({category: req.body.category.toLowerCase(), available: true})
          .then((doc) => {
            console.log(doc);
            res.send({
              category: req.body.category.toLowerCase(),
              data: doc
            })
          })
      })
    })
  });

module.exports = router;