// const ghostController = require("../controllers/ghostController");
const Menu = require('../models/Menu.js');

module.exports = app => {
  // get all menus
  app.get('/api/menus', (req, res) => {
      Menu
      .find({})
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
})};