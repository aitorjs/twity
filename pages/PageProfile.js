import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import TwityProfileHeaderCard from './../components/TwityProfileHeaderCard/TwityProfileHeaderCard';
import TwityProfileHeader from './../components/TwityProfileHeader';

export default class PageProfile extends React.Component {	
	render() { 
		return <div>
			<TwityProfileHeader 
				bg={this.props.d.user.bg} 
				imgBig={this.props.d.user.imgBig} />
			<Grid>
    		<Row>
      			<div className="col-sm-3">
				  		<TwityProfileHeaderCard  
				    		key={this.props.d.user.id} 
		        		user={this.props.d.user} />
		   			</div>
      	</Row>
    	</Grid>
    </div>
	}
}


