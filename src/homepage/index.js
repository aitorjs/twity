var page = require('page');
var empty = require('empty-element');
var nav = require('../nav');
var header = require('../header');

page('/', nav, header, function(ctx, next) {
  console.log("FINn!");

})
