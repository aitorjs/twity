/*
 * Module dependencies
 */

import React from 'react';

var iHome = {
  fontSize: '1.3em',
  verticalAlign: 'top'
};
var iText = {
  fontSize: '1em',
  verticalAlign: 'bottom'
};
var button = {
	marginTop: '8px',
	marginRight: '8px'
};
var buttonToogle = {
	marginTop: '8px',
	marginRight: '8px'
};
export default class TwityTopHeaderLeft extends React.Component {	
	render() {
		return <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand"></a>
    </div>

    <div className="collapse navbar-collapse" id="navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active">
          <a href="/">
            <i className="glyphicon glyphicon-home" aria-hidden="true" style={iHome}></i> 
            <span style={iText}>Hasiera</span>
            <span className="sr-only">(current)</span>
          </a>
        </li>

        <li>
          <a href="/profile">
            <i className="glyphicon glyphicon-bell" aria-hidden="true" style={iHome}></i> 
            <span style={iText}>Jakinarazpenak</span>
          </a>
        </li>

        <li>
          <a href="/aaaa">
            <i className="glyphicon glyphicon-inbox" aria-hidden="true" style={iHome}></i>
            <span style={iText}>Mezuak</span>
          </a>
        </li>
      </ul>

      <img src="/images/twitter_ico.png" title="logo" alt="logo" height="32" width="32" className="navbar-center"/>
     
      <ul className="nav navbar-nav navbar-right">
        <li>
          <div className="dropdown" id="avatar">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={buttonToogle}>
              <img src="https://pbs.twimg.com/profile_images/565680017737125888/ad1qqkg0_normal.jpeg" height="32" width="32" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><a href="#"><strong>Aitor Ibañez</strong><br/>Profila ikusi</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Zerrendak</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Laguntza</a></li>
              <li><a href="#">Teklatu lasterbideak</a></li>
              <li><a href="#">Iragariak</a></li>
              <li><a href="#">Azterketak</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Ezarpenak</a></li>
              <li><a href="#">Saioa itxi</a></li>
            </ul>
          </div>
        </li>

        <li>
          <button type="button" className="btn btn-blue" style={button}>
            <i className="glyphicon glyphicon-inbox"></i>
            Txiokatu
          </button>
        </li>
        
      </ul>

      <form className="navbar-form navbar-right" role="search" id="searchForm">
        <div className="form-group">
          <i className="glyphicon glyphicon-search"></i>
          <input type="text" className="form-control" placeholder="Bilatu Twitterren" id="searchFormValue" />
        </div>
      </form>
  </div>
</div>
	}
}