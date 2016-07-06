
/*
 * Module dependencies
 */

import React from 'react';

export default class TwityProfileHeaderCardName extends React.Component {	
	render() { return <div>
		<p id="name"><a href="#">{this.props.name}</a></p>
	</div>
	}
}


