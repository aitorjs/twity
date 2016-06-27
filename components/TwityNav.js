/*
 * Module dependencies
 */

import React from 'react';
import TwityNavMenu from './TwityNavMenu';

var button = {
	marginTop: '8px',
	marginRight: '8px'
};
var buttonToogle = {
	marginTop: '8px',
	marginRight: '8px'
};

export default class TwityNav extends React.Component {	
	render() {
		return <div className="container-fluid">

		<TwityNavMenu />
    
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
	}
}