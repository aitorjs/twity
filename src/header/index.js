var yo = require('yo-yo');
var empty = require('empty-element');

var el = yo`<div id="header"><h1>HEADER FOR PROFILE</h1></div>`;

module.exports = function header(ctx, next) {
  var container = document.getElementById('header');
  empty(container).appendChild(el);
  next();

}
