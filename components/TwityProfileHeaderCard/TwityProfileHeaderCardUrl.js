import React from 'react'

export default class TwityProfileHeaderCardUrl extends React.Component {
  render () {
    return <div>
      <p>
        <i className='glyphicon glyphicon-link' aria-hidden='true'></i>
        <span><a href='#'>{this.props.url}</a></span>
      </p>
    </div>
  }
}

TwityProfileHeaderCardUrl.propTypes = { url: React.PropTypes.string }
