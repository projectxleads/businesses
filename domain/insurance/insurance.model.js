const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  businesses: [{
    businessId: { type: Schema.Types.ObjectId, ref: 'Business', required: true } 
  }]
});

module.exports = mongoose.model('Insurance', insuranceSchema);