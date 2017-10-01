const express = require('express');
const router = express.Router();

const Menu = require('../seed/TestData');
const Item = require('../seed/TestItem');

ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/home');
  }
};

router.get('/current_user', (req, res) => {
  if (req.user) {
    res.send(req.user);
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

module.exports = router;