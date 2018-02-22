const express = require('express');

const router = express.Router();

router.get('/list', function (req, res) {
  res.send('Inside List Router');
});

module.exports = router;
