import React from 'react';

export default class TwityProfileHeaderCardBio extends React.Component {	
	render() { 
	  return <div>
	    <p id="bio">{this.props.bio}</p>
		</div>
	}
}

TwityProfileHeaderCardBio.propTypes = { bio: React.PropTypes.string }
