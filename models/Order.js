const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  totalQty: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  dishes: [{
    type: Schema.Types.ObjectId,
    ref: "Dish"
  }]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
