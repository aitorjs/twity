var yo = require('yo-yo');

var el = yo`<div id="header"><h1>HOLA</h1></div>`;

module.exports = function header(ctx, next) {
  console.log("header");
  var container = document.getElementById('header-container');
  console.log(container);
  container.appendChild(el);
  next();

}
