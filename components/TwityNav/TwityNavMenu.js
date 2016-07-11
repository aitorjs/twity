import React from 'react'
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'

import TwityAppLogo from './../TwityAppLogo'

var iHome = {
  fontSize: '1.3em',
  verticalAlign: 'top'
}
var iText = {
  fontSize: '1em',
  verticalAlign: 'bottom'
}

export default class TwityNavMenu extends React.Component {
  render () {
    return <Nav>
      <NavItem eventKey={1} href='#/'>
        <Glyphicon glyph='home' style={iHome} />
        <span style={iText} className='hidden-xs hidden-sm'> Hasiera</span>
        <span className='sr-only'>(current)</span>
      </NavItem>
      <NavItem eventKey={2} href='#/profile'>
        <Glyphicon glyph='bell' style={iHome} />
        <span style={iText} className='hidden-xs hidden-sm'> Jakinarazpenak</span>
      </NavItem>
      <NavItem eventKey={4} href='#/user'>
        <Glyphicon glyph='inbox' style={iHome} />
        <span style={iText} className='hidden-xs hidden-sm'> Mezuak</span>
      </NavItem>
      <NavItem eventKey={1} href='/' className='hidden-xs hidden-sm'>
        <TwityAppLogo />
      </NavItem>
    </Nav>
  }
}
