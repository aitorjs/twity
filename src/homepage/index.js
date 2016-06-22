var page = require('page');
var empty = require('empty-element');

page('/', function(ctx, next) {
  empty(document.getElementById('header'));
  empty(document.getElementById('main-container'));
})
