var page = require('page');
var empty = require('empty-element');
var header = require('../header');
var nav = require('../nav');

page('/', header, function(ctx, next) {
  empty(document.getElementById('header'));

  nav();

  console.log("end");

})
