
/*
 * Module dependencies
 */

import React from 'react';

export default class TwityProfileHeaderCardLocation extends React.Component {	
	render() { return <div>
		<p>
      <i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>
    	<span>{this.props.location}</span> 
    </p>
	</div>
	}
}

TwityProfileHeaderCardLocation.propTypes = { location: React.PropTypes.string };
