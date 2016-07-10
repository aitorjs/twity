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
	render() { 
    return <div> 
      <TwityProfileHeaderCardName name={this.props.user.name} />
      <TwityProfileHeaderCardScreenname screenname={this.props.user.screenname} />
      <TwityProfileHeaderCardBio bio={this.props.user.bio} />

      <div id="metadata">
        <TwityProfileHeaderCardLocation location={this.props.user.location} />
        <TwityProfileHeaderCardUrl url={this.props.user.url} />
        <TwityProfileHeaderCardJoindate  joindate={this.props.user.joindate} />
      </div>
    </div>
  }
}

TwityProfileHeaderCard.propTypes = { user: React.PropTypes.object }
