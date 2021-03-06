const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestItemSchema = new Schema({
  name: {
    type: String,
  },
  category: {
    type: String
  },
  price: {
    type: Number
  },
  available: {
    type: Boolean
  },
  image: {
    data: Buffer,
    contentType: String
  },
  sides: [{
    type: Schema.Types.ObjectId,
    ref: "Side"
  }]
});

const Item = mongoose.model("Item", TestItemSchema);

module.exports = Item;
