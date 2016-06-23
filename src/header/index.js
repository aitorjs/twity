var yo = require('yo-yo');
var empty = require('empty-element');

var el = yo`<div>
<div id="profile-background">
  <img src="https://pbs.twimg.com/profile_images/565680017737125888/ad1qqkg0_400x400.jpeg">
</div>
<div class="row" id="profile-numbers">
	<div class="col-md-6 col-md-offset-3">
  		<ul>
	  		<li id="relevant">
	  			<a href="#">
	  			  TXIOAK<br>
	  			  <span id="relevant">2.918</span></li>
          </a>
	  		<li>
          <a href="#">
            JARRAITZEN<br>
	  			  <span>2.918</span>
          </a>
        </li>
	  		<li>
          <a href="#">
            JARRAITZAILEAK<br>
	  			  <span>29</span>
          </a>
        </li>
	  		<li>
          <a href="#">
            ATSEGITEAK<br>
	  			  <span>29</span>
          </a>
        </li>
	  		<li>
          <a href="#">
            ZERRENDAK<br>
	  			  <span>29</span>
          </a>
        </li>
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
