const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestMenuSchema = new Schema({
  name: {
    type: String
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }]
});

const Menu = mongoose.model("Menu", TestMenuSchema);

module.exports = Menu;
