const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
},
{
  firstName: String
},
{
  lastName: String
},
{
  userEmail: String
}
);

mongoose.model('users', userSchema);