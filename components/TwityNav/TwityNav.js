import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import TwityNavMenu from './TwityNavMenu';
import TwityNavDropMenu from './TwityNavDropMenu';
import TwityTwitButton from './../TwityTwitButton';
import TwitySearch from './../TwitySearch';

export default  class TwityNav extends React.Component {	
	render() {
	  return <div className="container-fluid">

		<Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"></a>
      </Navbar.Brand>
      
      <TwityNavMenu />

      <Nav pullRight>
        <NavItem eventKey={1}>
           <TwitySearch />
        </NavItem>
        
        <NavItem eventKey={10}>
          <TwityNavDropMenu img={this.props.img} name={this.props.name} />
         </NavItem>

        <NavItem eventKey={2} href="#" id="twitButton">
          <TwityTwitButton />
        </NavItem>
       
      </Nav>
    </Navbar.Header>
  </Navbar>
  </div>
	}
}