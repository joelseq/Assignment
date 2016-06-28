const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/hello', function(req, res, next) {
  res.json({hello: 'world'});
});

module.exports = router;
