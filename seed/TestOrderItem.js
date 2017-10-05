const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestItemSchema = new Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  }
});

const OrderItem = mongoose.model("OrderItem", TestItemSchema);

module.exports = OrderItem;
