var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { title: 'Starter' });
})

app.listen(3000, function(err) {
  if (err) return console.log('ERROR'), process.exit(1);

  console.log('Listening on port 3000');
})
