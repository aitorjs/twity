
/*
 * Module dependencies
 */

import React from 'react';

import TwityNavBootstrap from './TwityNavBootstrap';
import TwityProfileHeaderCard from './TwityProfileHeaderCard/TwityProfileHeaderCard';

export default class TwityApp extends React.Component {	
	render() { return <div>
    <br/><br/><br/><br/>
		<TwityNavBootstrap />
    <section id="header"></section>
    <div className="container">
      <div className="row">
        <section id="main-container">
          {this.props.children}
        </section>
      </div>
    </div>
	</div>
	}
}


