import React from 'react';

import TwityProfileHeaderCard from './../components/TwityProfileHeaderCard/TwityProfileHeaderCard';
import TwityHeaderProfile from './../components/TwityHeaderProfile';

export default class PageProfile extends React.Component {	
	render() { 
		return <div>
			<TwityHeaderProfile />
			<div className="container">
    		<div className="row">
      			<div className="col-sm-3">
				  		<TwityProfileHeaderCard  
				    		key={this.props.d.user.id} 
		        		user={this.props.d.user} />
		   			</div>
      	</div>
    	</div>
    </div>
	}
}


