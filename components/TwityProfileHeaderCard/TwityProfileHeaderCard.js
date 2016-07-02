
/*
 * Module dependencies
 */

import React from 'react';

import TwityProfileHeaderCardName from './TwityProfileHeaderCardName';
import TwityProfileHeaderCardScreenname from './TwityProfileHeaderCardScreenname';
import TwityProfileHeaderCardBio from './TwityProfileHeaderCardBio';
import TwityProfileHeaderCardLocation from './TwityProfileHeaderCardLocation';
import TwityProfileHeaderCardUrl from './TwityProfileHeaderCardUrl';
import TwityProfileHeaderCardJoindate from './TwityProfileHeaderCardJoindate';

export default class TwityProfileHeaderCard extends React.Component {	
	render() { return <div>
    <TwityProfileHeaderCardName />
    <TwityProfileHeaderCardScreenname />
    <TwityProfileHeaderCardBio />

    <div id="metadata">
      <TwityProfileHeaderCardLocation />
      <TwityProfileHeaderCardUrl />
      <TwityProfileHeaderCardJoindate />
    </div>
  </div>
  }
}


