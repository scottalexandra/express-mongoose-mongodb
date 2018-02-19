const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const mongodb = 'mongodb://localhost/portfolioAPI';

const experiences = require('./routes/experiences');
const skills = require('./routes/skills');

//establish database conneciton
mongoose.createConnection(mongodb, { useMongoClient: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Welcome to my api');
});
app.use('/experiences', experiences);
app.use('/skills', skills);

module.exports = app;
