// const ghostController = require("../controllers/ghostController");
const Menu = require('../models/Menu.js');

module.exports = app => {
  // get all menus
  app.get('/api/menus', (req, res) => {
      Menu
      .find({deleted: false})
      .sort({ menuType: 1, menuSection: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }),
    app.delete('/api/menus/:id', (req, res) => {
      Menu
        .findOneAndUpdate({ _id: req.params.id }, { $set: { deleted: true }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    })
};