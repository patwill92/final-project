const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
adminEmail: {
  type: String,
  required: true
  },
password: String,
firstName: String,
lastName: String,
addressMain: String,
addressSecond: String,
addressCity: String,
addressState: String,
addressZip: String,
});

mongoose.model('admin', adminSchema);