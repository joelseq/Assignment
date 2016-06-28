//==============================
// Module Dependencies
//==============================
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Get environment variables
require('dotenv').config();

//==============================
// Express Config
//==============================
app.use(logger('dev'));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.DB_URI);

require('./routes')(app);

module.exports = app;
