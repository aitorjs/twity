import React from 'react';
// import axios from 'axios';

import TwityNav from './TwityNav/TwityNav';
import TwityProfileHeaderCard from './TwityProfileHeaderCard/TwityProfileHeaderCard';

import data from './../data.json';

export default class TwityApp extends React.Component {	
	 constructor(props) {
    super(props);
    this.state = { d: null }
    this.read = this.read.bind(this);
  }

  async read() {
    try {
        // const url =  `http://pokeapi.co/api/v1/sprite/1/`;
        // const { data } = await axios.get(url);
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
      <TwityNav img={this.state.d.user.img} />
      <section id="header"></section>
      <div className="container">
        <div className="row">
          <section id="main-container">
          {React.cloneElement(this.props.children, {d: data})}
          </section>
        </div>
      </div>
    </div>
  }
}