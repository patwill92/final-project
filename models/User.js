const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  cart:  { type: String, default: '' },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: "Order"
  }]
});

const User = mongoose.model('users', userSchema);
module.exports = User;