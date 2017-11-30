const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const experienceModel = new Schema({
  position: String,
  company: String,
  date: { startDate: String, endDate: String },
  description: String
});

module.exports = mongoose.model('Experience', experienceModel);
