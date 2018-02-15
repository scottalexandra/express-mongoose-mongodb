const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolModel = new Schema({
  name: String,
  city: String,
  state: String,
  degree: String
});

module.exports = mongoose.model('School', schoolModel);
