
/*
 * Module dependencies
 */

import React from 'react';
import $ from 'jquery';

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

  componentDidMount() {
    read()
      .then(function(data) {
        console.log(data.name);
    });

    async function read () {
      var url = `http://pokeapi.co/api/v1/sprite/1/`;
      return await $.get(url);   
    } 
  }

}


