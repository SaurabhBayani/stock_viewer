const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('list_view.ejs');
});

router.post('/', function (req, res) {
  res.send('Data Received');
});

module.exports = router;
