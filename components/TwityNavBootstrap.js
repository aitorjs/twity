
/*
 * Module dependencies
 */

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonToolbar, Button } from 'react-bootstrap';

var iHome = {
  fontSize: '1.3em',
  verticalAlign: 'top'
};
var iText = {
  fontSize: '1em',
  verticalAlign: 'bottom'
};

export default class TwityNavBootstrap extends React.Component {	
	render() { return <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/">
            <i className="glyphicon glyphicon-home" aria-hidden="true" style={iHome}></i> 
            <span style={iText}> Hasiera</span>
            <span className="sr-only">(current)</span>
        </NavItem>
        <NavItem eventKey={2} href="/profile">
            <i className="glyphicon glyphicon-bell" aria-hidden="true" style={iHome}></i> 
            <span style={iText}> Jakinarazpenak</span>
        </NavItem>
         <NavItem eventKey={4} href="/aaa">
             <i className="glyphicon glyphicon-inbox" aria-hidden="true" style={iHome}></i>
            <span style={iText}> Mezuak</span>
        </NavItem>
        
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1}>
          SEARCH
        </NavItem>
         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
        <NavItem eventKey={2} href="#">
           <ButtonToolbar>
             <Button bsStyle="primary">Txiokatu</Button>
          </ButtonToolbar>
        </NavItem>
       
      </Nav>
    </Navbar.Collapse>
  </Navbar>
	}
}