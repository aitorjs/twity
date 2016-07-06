/*
 * Module dependencies
 */

import React from 'react';

import TwityProfileHeaderCard from './../components/TwityProfileHeaderCard/TwityProfileHeaderCard';

export default class PageProfile extends React.Component {	
	render() { 
// console.log(this.props.user.user.name);
console.log(this.props.children);
		return <div className="col-sm-3">
     	<TwityProfileHeaderCard  user="user" />
   	</div>
	}
}


