const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {type: String, 
             required: true},
  firstName: String,
  lastName: String,
  userEmail: String,
  addressMain: String,
  addressSecond: String,
  addressCity: String,
  addressState: String,
  addressZip: String,
  favoriteItems: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Menu"
  }]
});

mongoose.model('users', userSchema);