
/*
 * Module dependencies
 */

import React from 'react';
import TwityAvatar from './TwityAvatar';
import TwityNavDropMenu from './TwityNavDropMenu';

var buttonToogle = {
  marginTop: '8px',
  marginRight: '8px'
};

export default class TwityNavDrop extends React.Component { 
  render() { return <div className="dropdown" id="avatar">
            <TwityAvatar />
            
            <TwityNavDropMenu />
          </div>
  }
} 



