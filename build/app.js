'use strict';

//==============================
// Module Dependencies
//==============================
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

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