import React from 'react'

import TwityAvatar from './TwityAvatar'

export default class TwityProfileHeaderBg extends React.Component {
  render () {
    var profileBackground = {
      // backgroundImage: "url('" + this.props.bg + "')",
      backgroundImage: `url('${this.props.bg}')`,
      height: '190px',
      width: '100%',
      marginTop: '-41px'
    }

    var profileBackgroundImg = {
      marginLeft: '103px',
      marginTop: '45px',
      height: '211px',
      borderRadius: '10px',
      border: '5px solid #fff'
    }

    return <div id='profile-background' style={profileBackground}>
      <TwityAvatar style={profileBackgroundImg} src={this.props.imgBig} />
    </div>
  }
}

TwityProfileHeaderBg.propTypes = {
  bg: React.PropTypes.string,
  imgBig: React.PropTypes.string
}
