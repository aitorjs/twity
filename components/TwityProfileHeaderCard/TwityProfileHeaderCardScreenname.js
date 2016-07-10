
/*
 * Module dependencies
 */

import React from 'react';

export default class TwityProfileHeaderCardScreenname extends React.Component {	
	render() { return <div>
		<p id="nickname"><a href="#">@{this.props.screenname}</a></p>
	</div>
	}
}

TwityProfileHeaderCardScreenname.propTypes = { screenname: React.PropTypes.string }
