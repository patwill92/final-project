const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
adminEmail: {
  type: String,
  required: true
  },
password: {
  type: String,
  required: true
},
firstName: String,
lastName: String,
addressMain: String,
addressSecond: String,
addressCity: String,
addressState: String,
addressZip: String,
mobilePhone: String,
otherPhone: String
});

mongoose.model('admin', adminSchema);