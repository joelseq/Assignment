'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* Get all users */
router.get('/users', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Something went wrong." });
    }
    res.send(users);
  });
});

/* Save a user */
router.post('/users', function (req, res) {
  if (!req.body.fname || !req.body.lname) {
    return res.status(400).json({ error: "Firstname and Lastname required." });
  }

  var user = {
    firstName: req.body.fname,
    lastName: req.body.lname
  };

  User.create(user, function (err, savedUser) {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Something went wrong." });
    }
    res.status(200).json({ message: "User successfully created." });
  });
});

/* Update a user */
router.put('/users/:id', function (req, res) {
  if (!req.body.fname || !req.body.lname) {
    return res.status(400).json({ error: "Firstname and Lastname required." });
  }

  var user = {
    firstName: req.body.fname,
    lastName: req.body.lname
  };

  User.findByIdAndUpdate(req.params.id, user, function (err, foundUser) {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Something went wrong." });
    }
    res.status(200).json({ message: "Successfully updated user." });
  });
});

/* Delete a user */
router.delete('/users/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Something went wrong." });
    }
    res.status(200).json({ message: "User successfully removed." });
  });
});

module.exports = router;