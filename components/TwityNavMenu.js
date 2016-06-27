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
export default class TwityNavMenu extends React.Component {	
	render() {return <div>
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
    </div>
  </div>
	}
}