const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  email : {
    type : String,
    required: true,
  },
  amount : {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Payment', paymentSchema);