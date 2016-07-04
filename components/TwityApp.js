
/*
 * Module dependencies
 */

import React from 'react';
import axios from 'axios';

import TwityNavBootstrap from './TwityNavBootstrap';
import TwityProfileHeaderCard from './TwityProfileHeaderCard/TwityProfileHeaderCard';

export default class TwityApp extends React.Component {	
	
  componentDidMount() {

    read()
    .then(function(res) {
      console.log(res.data.name);
    });

    async function read () {
      var url = `http://pokeapi.co/api/v1/sprite/1/`;
      
      return await 
      axios
      .get(url)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

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


