const passport = require('passport');
const express = require('express');
const router = express.Router();

checkForToken = (req, res, next) => {
  if (req.user) {
    return res.status(403).send({
      message: 'User already logged in'
    })
  } else {
    next();
  }
};

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/facebook', passport.authenticate('facebook'));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/')
});

router.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
  res.redirect('/')
});

module.exports = router;