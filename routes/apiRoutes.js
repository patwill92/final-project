const express = require('express');
const router = express.Router();
const Menu = require('../seed/TestData');
const Item = require('../seed/TestItem');
const Cart = require('../models/Cart');

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/fail');
  }
};

router.get('/current_user', (req, res) => {
  console.log(req.session)
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
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  Item.findById(itemId, (err, item) => {
    if (err)
      console.log(err);
    let myItem = {
      id: item.id,
      name: item.name,
      qty,
      sides: sides.sort(),
      text,
      price: item.price
    };
    cart.addToCart(myItem);
    req.session.cart = cart;
    console.log(cart);
    res.send(req.session.cart)
  })
})

router.get('/cart', (req, res) => {
  res.send(req.session)
});

module.exports = router;