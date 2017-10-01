const express = require('express');
const router = express.Router();

const Menu = require('../models/Menu.js');

router.get('/menus', (req, res) => {
  Menu
    .find({deleted: false})
    .sort({menuType: 1, menuSection: 1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.delete('/menus/:id', (req, res) => {
  Menu
    .findOneAndUpdate({_id: req.params.id}, {$set: {deleted: true}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
