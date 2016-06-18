var page = require('page');
var empty = require('empty-element');
var nav = require('../nav');

page('/', function(ctx, next) {
  empty(document.getElementById('header'));
})
