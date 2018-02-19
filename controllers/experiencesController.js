const experienceModel = require('../models/experienceModel');

exports.experience_create = (req, res) => {
  res.send('TODO create an experience by POSTing');
};

exports.experience_show = (req, res) => {
  res.send('TODO show an individual experience by GETing' + req.params.id);
};

exports.experience_index = (req, res) => {
  res.send('TODO show a list of experiences by GETing');
};

exports.experience_update = (req, res) => {
  res.send('TODO update an experience by PUTing');
};

exports.experience_delete = (req, res) => {
  res.send('TODO delete an experience by DELETEing');
};
