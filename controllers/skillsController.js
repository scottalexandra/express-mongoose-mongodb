const skillModel = require('../models/skillModel');

exports.skill_create = (req, res) => {
  res.send('TODO create a skill by POSTing');
};

exports.skill_show = (req, res) => {
  res.send('TODO show an indivdual skill by GETing' + req.params.id );
};

exports.skill_index = (req, res) => {
  res.send('TODO show a list of skills by GETing');
};

exports.skill_update = (req, res) => {
  res.send('TODO update an individual skill by PUTing');
};

exports.skill_delete = (req, res) => {
  res.send('TODO delete an individual skill by DELETIing');
};
