
/*
 * Module dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';

import TwityNavBootstrap from './TwityNavBootstrap';
import TwityProfileHeaderCard from './TwityProfileHeaderCard/TwityProfileHeaderCard';

export default class TwityApp extends React.Component {	
	render() { return <div>
		<TwityNavBootstrap />
    <section id="header"></section>
    <div className="container">
      <div className="row">
        <section id="main-container">
          <div className="col-sm-3">
            <TwityProfileHeaderCard />
          </div>
        </section>
      </div>
    </div>
	</div>
	}
}


