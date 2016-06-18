var yo = require('yo-yo');
var empty = require('empty-element');

var el = yo`<div>
<div id="profile-background">
  <img src="https://pbs.twimg.com/profile_images/565680017737125888/ad1qqkg0_400x400.jpeg">
</div>
<div class="row">
	<div class="col-md-3"></div>
  	<div class="col-md-1">
  		TXIOAK <br>2.918
  	</div>
  	<div class="col-md-1">
  		JARRAITZEN <br>2.918
  	</div>
  	<div class="col-md-1">
  		JARRAITZAILEAK <br>29
  	</div>
  	<div class="col-md-1">
  		ATSEGITEAK <br>29
  	</div>
  	<div class="col-md-1">
  		ZERRENDAK <br>5
  	</div>
  	<div class="col-md-2"></div>
  	<div class="col-md-1">boton</div>
  </div>
/div>`;

module.exports = function header(ctx, next) {
  var container = document.getElementById('header');
  empty(container).appendChild(el);
  next();

}
