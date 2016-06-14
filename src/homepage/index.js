var page = require('page');
var empty = require('empty-element');
var header = require('../header');

page('/', header, function(ctx, next) {
  console.log("FINn!");

})
