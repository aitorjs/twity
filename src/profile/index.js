var page = require('page');
var empty = require('empty-element');
var header = require('../header');
var yo = require('yo-yo');

page('/profile', header, function(ctx, next) {

  var container = document.getElementById('main-container');
  var el = yo`<div>
  	<div class="col-sm-3">
  		<p id="name"><a href="#">Aitor Ibañez</a></p>
  		<p id="nickname"><a href="#">@aitoribanez_</a></p>
  		<p id="bio">Profesional web.<a href="#">#javascript </a><a href="#">#angularjs </a> <a href="#">#ionic </a><a href="#">#express </a><a href="#">#PHP </a><a href="#">#drupal </a><a href="#">#laravel </a><a href="#">#wordpress </a><a href="#">#polymer </a>.Disponible para trabajar.GNU/Linux user <a href="#">#soberania_tecnologica</a></p>
  		<div id="metadata">
        <p>
    			<i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>
    			<span>Donostia</span> 
        </p>
        <p>
          <i class="glyphicon glyphicon-link" aria-hidden="true"></i>
          <span><a href="#">aitoribanez.com</a></span> 
        </p>
        <p>
          <i class="glyphicon glyphicon-calendar" aria-hidden="true"></i>
          <span>2010(e)ko otsailak(e)tik Twitterren</span> 
        </p>
      </div>
      <div id="multimedia">
        <p>
          <i class="glyphicon glyphicon-facetime-video" aria-hidden="true"></i>
          <a href="#">Argazkiak eta bideoak</a>
        </p>
        <div class="col-sm-4">
          <img src="https://pbs.twimg.com/media/CkdfwvpWsAA9huU.jpg:thumb" alt="alt" title="title" height="83px" />
        </div>
        <div class="col-sm-4">
          <img src="https://pbs.twimg.com/media/CkdfwvpWsAA9huU.jpg:thumb" alt="alt" title="title" height="83px" />
        </div>
        <div class="col-sm-4">
          <img src="https://pbs.twimg.com/media/CkdfwvpWsAA9huU.jpg:thumb" alt="alt" title="title" height="83px" />
        </div>
        <div class="col-sm-4">
          <img src="https://pbs.twimg.com/media/CkdfwvpWsAA9huU.jpg:thumb" alt="alt" title="title" height="83px" />
        </div>
        <div class="col-sm-4">
          <img src="https://pbs.twimg.com/media/CkdfwvpWsAA9huU.jpg:thumb" alt="alt" title="title" height="83px" />
        </div>
        <div class="col-sm-4">
          <img src="https://pbs.twimg.com/media/CkdfwvpWsAA9huU.jpg:thumb" alt="alt" title="title" height="83px" />
        </div>
      </div>
  	</div>
  	<div class="col-sm-6">B</div>
  	<div class="col-sm-3">C</div>
  </div>`;

  empty(container).appendChild(el);
})