const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    User.findOne({googleId: profile.id})
      .then(existingUser => {
        if (existingUser) {
          console.log(existingUser);
          done(null, existingUser)
        } else {
          new User({googleId: profile.id}).save()
            .then(user => done(null, user))
        }
      }).catch((err) => {
      console.log(err);
    })
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});