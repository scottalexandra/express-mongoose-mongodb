const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillModel = new Schema({
  description: String,
  level: { type: String, required: true, enum: ['Basic, Proficient, Advanced'], default: 'Proficient'}
});

module.exports = mongoose.model('Skill', skillModel);
