const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dishSchema = new Schema({
  item: {
    type: Schema.Types.ObjectId,
    ref: "Item"
  },
  sides: {
    type: Schema.Types.ObjectId,
    ref: "Side"
  },
  text: {
    type: String
  },
  qty: {
    type: Number
  }
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
