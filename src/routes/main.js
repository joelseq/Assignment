const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* Get all users */
router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if(err) {
      console.log(err);
      return res.status(500).json({message: "Something went wrong."});
    }
    res.send(users);
  });
});

/* Save a user */
router.post('/users', (req, res) => {
  if(!req.body.fname || !req.body.lname) {
    return res.status(400).json({error: "Firstname and Lastname required."});
  }

  let user = {
    firstName: req.body.fname,
    lastName: req.body.lname
  };

  User.create(user, (err, savedUser) => {
    if(err) {
      console.log(err);
      return res.status(500).json({message: "Something went wrong."});
    }
    res.status(200).json({message: "User successfully created."});
  });
});

/* Update a user */
router.put('/users/:id', (req, res) => {
  if(!req.body.fname || !req.body.lname) {
    return res.status(400).json({error: "Firstname and Lastname required."});
  }

  let user = {
    firstName: req.body.fname,
    lastName: req.body.lname
  };

  User.findByIdAndUpdate(req.params.id, user, (err, foundUser) => {
    if(err) {
      console.log(err);
      return res.status(500).json({message: "Something went wrong."});
    }
    res.status(200).json({message: "Successfully updated user."});
  });
});

/* Delete a user */
router.delete('/users/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      console.log(err);
      return res.status(500).json({message: "Something went wrong."});
    }
    res.status(200).json({message: "User successfully removed."});
  });
});

module.exports = router;
