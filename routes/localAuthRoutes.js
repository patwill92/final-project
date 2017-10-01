const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../models/User');

router.post('/signup', (req, res) => {
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  req.getValidationResult().then((result) => {
    if (result.array().length > 0) {
      req.flash('error_msg', result.array());
      res.send(req.flash())
    }
    else {
      let saltRounds = 10;
      bcrypt.hash(req.body.password, saltRounds).then(hash => {
        let user = {
          name: req.body.name,
          email: req.body.email,
          password: hash
        };
        User.create(user).then(() => {
          req.flash('success_msg', 'You are registered and can now login');
          res.json(user)
        }).catch((err) => {
          console.log(err);
          req.flash('error_msg', {param: "email", msg: "Email already exists"});
          res.send(req.flash());
        })
      });
    }
  })
});

const loginMiddleware = (req, res, next) => {
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.getValidationResult().then((result) => {
    if (result.array().length > 0) {
      req.flash('error_msg', result.array());
      res.send(req.flash())
    } else {
      User.findOne({
        email: req.body.email
      }, (err, user) => {
        if (err) throw err;
        if (!user) {
          req.flash('error_msg', {param: "email", msg: "user does not exist"});
          res.json(req.flash());
        } else {
          next()
        }
      });
    }
  })
};

router.post('/login',
  loginMiddleware,
  passport.authenticate('local', {failureRedirect: '/fail', successRedirect: '/menu'})
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/test', (req, res) => {
  res.redirect('/menu')
});

module.exports = router;
