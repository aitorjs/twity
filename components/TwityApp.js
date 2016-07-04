
/*
 * Module dependencies
 */

import React from 'react';
import axios from 'axios';

import TwityNavBootstrap from './TwityNavBootstrap';
import TwityProfileHeaderCard from './TwityProfileHeaderCard/TwityProfileHeaderCard';

export default class TwityApp extends React.Component {	
	 constructor(props) {
    super(props);
    this.state = { d: {} }
    this.read = this.read.bind(this);
  }

  async read() {
    try {
        const url =  `http://pokeapi.co/api/v1/sprite/1/`;
        const { data } = await axios.get(url);
        this.setState({
          d: data,
        });
      } catch (error) {
        console.error(error);
      }
  }

  componentDidMount() {

    console.log("A");
    console.log(this.state);
    console.log("B");
  }
   
  render() { return <div>
     {this.state.d.name}
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


