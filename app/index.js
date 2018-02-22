const express = require('express');
const listRouter = require('./routers/list_router');

const app = express();

/* Routers */
app.get('/list', listRouter);
app.get('/', function (req, res) {
  // Default route
  res.redirect('/list');
});
app.get('*', function (req, res) {
  // 404
  res.status('404');
  res.send('404 - OOPS you landed on wrong page. :(');
});

// Start this amazing app
const listener = app.listen('8080', function () {
  console.log('Server runnning on port no: ', listener.address().port);
  console.log('********************************************************');
});
