import React from 'react';

import TwityProfileHeaderBg from './TwityProfileHeaderBg';

export default class TwityProfileHeader extends React.Component {	
	render() { 
		return <div>
      <TwityProfileHeaderBg bg={this.props.bg} imgBig={this.props.imgBig} />
      <div className="row" id="profile-numbers">
      	<div className="col-md-6 col-md-offset-3">
        		<ul>
      	  		<li id="relevant">
      	  			<a href="#">
      	  			  TXIOAK<br/>
      	  			  <span id="relevant">2.918</span></a>
              </li>
              <li>
                <a href="#">
                  JARRAITZEN<br/>
      	  			  <span>2.918</span>
                </a>
              </li>
      	  		<li>
                <a href="#">
                  JARRAITZAILEAK<br/>
      	  			  <span>29</span>
                </a>
              </li>
      	  		<li>
                <a href="#">
                  ATSEGITEAK<br/>
      	  			  <span>29</span>
                </a>
              </li>
      	  		<li>
                <a href="#">
                  ZERRENDAK<br/>
      	  			  <span>29</span>
                </a>
              </li>
       		</ul>
       	</div>
        	<div className="col-md-1 col-md-offset-1">
        		<button type="button" className="btn btn-grey">
                  Profila aldatu
                </button>
        	</div>
        </div>
      </div>
	}
}