const express = require('express');
const listRouter = require('./routers/list_router');

const app = express();

app
  /* Statics */
  .use('/static/vendor/bootstrap/', express.static('../node_modules/bootstrap/dist/css/'))

  /* Routers */
  .use('/list', listRouter)

  /* Default Paths */
  .get('/', function (req, res) {
    res.redirect('/list');
  })

  .use('*', function (req, res) {
    res.status('404');
    res.send('404 - OOPS you landed on wrong page. :(');
  });

// Start this amazing app
const listener = app.listen('8080', function () {
  console.log('Server runnning on port no: ', listener.address().port);
  console.log('********************************************************');
});
