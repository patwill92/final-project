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
  cart:  { type: String, default: '' }
});

const User = mongoose.model('users', userSchema);
module.exports = User;