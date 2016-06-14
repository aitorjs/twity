var yo = require('yo-yo');
var empty = require('empty-element');


var el = yo`<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand"></a>
    </div>

    <div class="collapse navbar-collapse" id="navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active">
          <a href="#">
            <i class="glyphicon glyphicon-home" aria-hidden="true" style="font-size:1.3em;vertical-align: top;"></i> 
            <span style="font-size:1em;vertical-align: bottom">Hasiera</span>
            <span class="sr-only">(current)</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="glyphicon glyphicon-bell" aria-hidden="true" style="font-size:1.3em;vertical-align: top;"></i> 
            <span style="font-size:1em;vertical-align: bottom">Jakinarazpenak</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="glyphicon glyphicon-inbox" aria-hidden="true" style="font-size:1.3em;vertical-align: top;"></i>
            <span style="font-size:1em;vertical-align: bottom">Mezuak</span>
          </a>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li>
          <div class="dropdown" id="avatar">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin-top:8px;margin-right:8px">
              <img src="https://pbs.twimg.com/profile_images/565680017737125888/ad1qqkg0_normal.jpeg" height="32" width="32" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </li>

        <li>
          <button type="button" class="btn btn-blue" style="margin-top:8px;margin-right:8px">
            <i class="glyphicon glyphicon-inbox">
              Dropup"></i>
            Txiokatu
          </button>
        </li>
        
      </ul>

      <form class="navbar-form navbar-right" role="search" id="searchForm">
        <div class="form-group">
          <i class="glyphicon glyphicon-search"></i>
          <input type="text" class="form-control" placeholder="Bilatu Twitterren" id="searchFormValue">
        </div>
      </form>
  </div>
</nav>`;


module.exports = function header(ctx, next) {
  console.log("header");
  var container = document.getElementById('header-container');
  empty(container).appendChild(el);
  next();

}
