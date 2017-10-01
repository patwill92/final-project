const bcrypt = require('bcryptjs');

module.exports = {
  generateHash(password, done) {
    return new Promise((resolve) => {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, null, done).then((res) => {
          resolve(res);
        });
      });
    })
  },
  ensureUser(req, res, next) {
    if (req.isAuthenticated() && req.user.username === req.params.username) {
      next();
    } else {
      if (req.isAuthenticated()) {
        res.redirect(`/user/profile`);
      } else {
        res.redirect('/user/login');
      }
    }
  },
  ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/user/login');
    }
  },
  getMyUser(req) {
    return new Promise(resolve => {
      resolve(req.user.id)
    })
  },
  getToken(headers) {
    if (headers && headers.authorization) {
      let parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
};
