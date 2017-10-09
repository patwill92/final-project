const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
 order: String
});

const OrderItems = mongoose.model('OrderItems', orderSchema);

module.exports = OrderItems