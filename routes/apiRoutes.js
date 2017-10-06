const express = require('express');
const router = express.Router();
const Menu = require('../seed/TestData');
const Item = require('../seed/TestItem');
const User = require('../models/User');
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
  Menu.find({})
    .populate('items')
    .exec((err, doc) => {
      if (err)
        res.send(err);
      else
        res.send(doc);
    })
});

router.get('/menu/:cat', (req, res) => {
  Item
    .find({category: req.params.cat})
    .then((doc) => {
      res.send(doc)
    })
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
      cart.addToCart(myItem)
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

router.get('/cart', (req, res) => {
  res.send(req.user ? req.user.cart : {})
});

module.exports = router;