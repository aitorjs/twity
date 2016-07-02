
/*
 * Module dependencies
 */

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonToolbar, Button, DropdownButton, Dropdown, Glyphicon, FormGroup, FormControl } from 'react-bootstrap';

var iHome = {
  fontSize: '1.3em',
  verticalAlign: 'top'
};
var iText = {
  fontSize: '1em',
  verticalAlign: 'bottom'
};

export default class TwityNavBootstrap extends React.Component {	
	render() { return <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"></a>
      </Navbar.Brand>
    
      <Nav>
        <NavItem eventKey={1} href="/">
            <Glyphicon glyph="home" style={iHome} /> 
            <span style={iText} className="hidden-xs hidden-sm"> Hasiera</span>
            <span className="sr-only">(current)</span>
        </NavItem>
        <NavItem eventKey={2} href="/profile">
          <Glyphicon glyph="bell" style={iHome} />
          <span style={iText} className="hidden-xs hidden-sm"> Jakinarazpenak</span>
        </NavItem>
         <NavItem eventKey={4} href="/aaa">
            <Glyphicon glyph="inbox" style={iHome} />
            <span style={iText} className="hidden-xs hidden-sm"> Mezuak</span>
        </NavItem>
        <NavItem eventKey={1} href="/" className="hidden-xs hidden-sm">
          <img src="/images/twitter_ico.png" className="navbar-center" title="logo" alt="logo" height="32" width="32" />
        </NavItem>
      </Nav>

      <Nav pullRight>
        <NavItem eventKey={1}>
           <form className="navbar-form navbar-right" role="search" id="searchForm">
           <div className="form-group">
             <input type="text" className="form-control hidden-xs" placeholder="Bilatu Twitterren" id="searchFormValue" />
             <Glyphicon glyph="search" />
            </div>
          </form>
        </NavItem>
        
        <NavItem eventKey={10}>
          <Dropdown id="dropdownMenu2">
            <Dropdown.Toggle noCaret>
              <img src="https://pbs.twimg.com/profile_images/565680017737125888/ad1qqkg0_normal.jpeg" height="32" width="32" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="sdropdown-menu">
              <MenuItem eventKey={0} href="#">
                <strong>Aitor Ibañez</strong><br/>Profila ikusi
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1} href="#">Zerrendak</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2} href="#">Laguntza</MenuItem>
              <MenuItem eventKey={3} href="#" active>Teklatu lasterbideak</MenuItem>
              <MenuItem eventKey={4} href="#">Iragarkiak</MenuItem>
              <MenuItem eventKey={5} href="#">Azterketak</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={6} href="#">Ezarpenak</MenuItem>
              <MenuItem eventKey={7} href="#">Saioa itxi</MenuItem>
            </Dropdown.Menu>
          </Dropdown>
         </NavItem>

        <NavItem eventKey={2} href="#" id="twitButton">
          <Button bsStyle="primary">
            <i className="glyphicon glyphicon-inbox"></i>
            <span className="hidden-xs hidden-sm">Txiokatu</span>
          </Button>
        </NavItem>
       
      </Nav>
    </Navbar.Header>
  </Navbar>
	}
}