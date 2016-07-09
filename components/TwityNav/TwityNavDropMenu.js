import React from 'react';
import { MenuItem, Dropdown } from 'react-bootstrap';

import TwityAvatar from './../TwityAvatar';

export default class TwityNavDropMenu extends React.Component { 
  render() { 
    var avatar = {
      height: '32px',
      width: '32px'
    };

    return  <div>
    <Dropdown id="dropdownMenu2">
      <Dropdown.Toggle noCaret>
        <TwityAvatar style={avatar} src={this.props.img} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="sdropdown-menu">
        <MenuItem eventKey={0} href="#">
          <strong>{this.props.name}</strong><br/>Profila ikusi
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
  </div>
  }
} 







