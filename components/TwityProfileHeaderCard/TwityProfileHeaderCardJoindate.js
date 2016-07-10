
/*
 * Module dependencies
 */

import React from 'react';

export default class TwityProfileHeaderCardJoindate extends React.Component {	
	render() { return <div>
	  <p>
      <i className="glyphicon glyphicon-calendar" aria-hidden="true"></i>
      <span>{this.props.joindate}tik Twitterren</span> 
    </p>
	</div>
	}
}

TwityProfileHeaderCardJoindate.propTypes = { joindate: React.PropTypes.string };
