import React from 'react';
import axios from 'axios';

import TwityNavBootstrap from './TwityNavBootstrap';
import TwityProfileHeaderCard from './TwityProfileHeaderCard/TwityProfileHeaderCard';

export default class TwityApp extends React.Component {	
	 constructor(props) {
    super(props);
    this.state = { d: null }
    // this.read = this.read.bind(this);
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
    this.read();
  }

  render() { 
    if (!this.state.d) {
      return <div>loading</div>
    }

    return <div>
      <br/><br/><br/><br/>
      {this.state.d.name}

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