const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  orderDate: {
    type: Date,
    default: Date.now
  },
  orderCompleteDate: {
    type: Date
  },
  orderTotalPrice: Number,
  orderItems: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Menu model
    ref: "Menu"
  }]
});

mongoose.model('orders', orderSchema);