const Company = require('./companyModel');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceModel = new Schema({
  title: String,
  description: String,
  date: { startDate: String, endDate: String },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
});

module.exports = mongoose.model('Experience', experienceModel);
