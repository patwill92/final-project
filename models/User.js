const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {type: String, 
             required: true}
},
{
  firstName: String
},
{
  lastName: String
},
{
  userEmail: String
},
{
  addressMain: String
},
{
  addressSecond: String
},
{
  addressCity: String
},
{
  addressState: String
},
{
  addressZip: String
}
);

mongoose.model('users', userSchema);