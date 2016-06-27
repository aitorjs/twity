 

/*
 * Module dependencies
 */

import React from 'react';

var buttonToogle = {
  marginTop: '8px',
  marginRight: '8px'
};

export default class TwityAvatar extends React.Component { 
  render() { return <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={buttonToogle}>
              		<img src="https://pbs.twimg.com/profile_images/565680017737125888/ad1qqkg0_normal.jpeg" height="32" width="32" />
            	</button>
  }
} 





