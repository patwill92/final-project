const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema(
{
  password: String
},
{
  firstName: String
},
{
  lastName: String
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
},
{
  adminEmail: String,
  required: true
}
);

mongoose.model('admins', adminSchema);