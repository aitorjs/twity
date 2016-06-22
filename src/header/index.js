var yo = require('yo-yo');
var empty = require('empty-element');

var el = yo`<div>
<div id="profile-background">
  <img src="https://pbs.twimg.com/profile_images/565680017737125888/ad1qqkg0_400x400.jpeg">
</div>
<div class="row" id="profile-numbers">
	<div class="col-md-6 col-md-offset-3">
  		<ul>
	  		<li>TXIOAKa<br>
	  			<span class="relevant">2.918</span></li>
	  		<li>JARRAITZEN<br>
	  			<span class="relevant">2.918</span></li>
	  		<li>JARRAITZAILEAK<br>
	  			<span class="relevant">29</span></li>
	  		<li>ATSEGITEAK<br>
	  			<span class="relevant">29</span></li>
	  		<li>ZERRENDAK<br>
	  			<span class="relevant">29</span></li>
 		</ul>
 	</div>
  	<div class="col-md-1 col-md-offset-1">
  		<button type="button" class="btn btn-grey">
            Profila aldatu
          </button>
  	</div>
  </div>
/div>`;

module.exports = function header(ctx, next) {
  var container = document.getElementById('header');
  empty(container).appendChild(el);
  next();

}
