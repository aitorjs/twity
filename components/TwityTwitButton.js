import React from 'react';
import { Glyphicon, Button } from 'react-bootstrap';

export default class TwityTwitButton extends React.Component { 
  render() { return <div>
	 	<Button bsStyle="primary">
      <Glyphicon glyph="inbox" />
      <span className="hidden-xs hidden-sm">Txiokatu</span>
    </Button>
  </div>
  }
} 




