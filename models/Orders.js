const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  name: {
    type: String
  },
  category: {
    type: Date
  },
  price: {
    type: Date
  },
  quantity: {
    type: Date
  }
});

mongoose.model('orders', orderSchema);