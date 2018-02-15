const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Experience = require('./experienceModel');

const companyModel = new Schema({
  name: String,
  city: String,
  state: String,
  experiences: [{ type: Schema.Types.ObjectId, ref: 'Experience'}],
});

module.exports = mongoose.model('Company', companyModel);
