import React from 'react';
import axios from 'axios';

import TwityNavBootstrap from './TwityNavBootstrap';
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

    let currentUrl = () => {
      let url = window.location.href;
      url = url.split("#")[1];
      url = url.split("?")[0];
      return url.split("/")[1];
    }

    const children = () => {
      switch(currentUrl()) {
        case 'profile':
          return <div className="col-sm-3">
            <TwityProfileHeaderCard  key={this.state.d.user.id} user={this.state.d.user} />
          </div>
          break;

        case 'user':
          return <p>Esta es la página de User</p>
          break;
        
        default:
          return <p>Esta es la página de Inicio</p>
          break;
      }
    }

    
    

    return <div>
      <br/><br/><br/><br/>
      <TwityNavBootstrap img={this.state.d.user.img} />
      <section id="header"></section>
      <div className="container">
        <div className="row">
          <section id="main-container">
            {children()}
          </section>
        </div>
      </div>
    </div>
  }
}