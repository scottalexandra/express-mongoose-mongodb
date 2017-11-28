const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const port = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Welcome to my api');
});

app.listen(port, () => {
  console.log('Running on PORT: ' + port);
});

module.exports = app;
