import React from 'react'
import { Row, Button } from 'react-bootstrap'

import TwityProfileHeaderBg from './TwityProfileHeaderBg'
import TwityProfileHeaderMenu from './TwityProfileHeaderMenu'

export default class TwityProfileHeader extends React.Component {
  render () {
    return <div>
      <TwityProfileHeaderBg bg={this.props.bg} imgBig={this.props.imgBig} />
      <Row id='profile-numbers'>
        <div className='col-md-6 col-md-offset-3'>
          <TwityProfileHeaderMenu />
        </div>
        <div className='col-md-1 col-md-offset-1'>
          <Button>Profila aldatu</Button>
        </div>
      </Row>
    </div>
  }
}

TwityProfileHeader.propTypes = {
  bg: React.PropTypes.string,
  imgBig: React.PropTypes.string
}
