/*
 * Module dependencies
 */

import React from 'react';
import TwityNavMenu from './TwityNavMenu';
import TwityAppLogo from './TwityAppLogo';
import TwityTwitButton from './TwityTwitButton';
import TwityNavDrop from './TwityNavDrop';

export default class TwityNav extends React.Component {	
	render() {
	  return <div className="container-fluid">

		<TwityNavMenu />
    
    	<TwityAppLogo />
     
     	<ul className="nav navbar-nav navbar-right">
     		<li>
     			<TwityTwitButton />
     		</li>
     		<li>
     			<TwityNavDrop />
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