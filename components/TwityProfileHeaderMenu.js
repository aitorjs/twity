import React from 'react'

export default class TwityProfileHeaderMenu extends React.Component {
  render () {
    return <ul>
      <li id='relevant'>
        <a href='#'>
          TXIOAK<br />
          <span id='relevant'>2.918</span>
        </a>
      </li>
      <li>
        <a href='#'>
          JARRAITZEN<br />
          <span>2.918</span>
        </a>
      </li>
      <li>
        <a href='#'>
          JARRAITZAILEAK<br />
          <span>29</span>
        </a>
      </li>
      <li>
        <a href='#'>
          ATSEGITEAK<br />
          <span>29</span>
        </a>
      </li>
      <li>
        <a href='#'>
          ZERRENDAK<br />
          <span>29</span>
        </a>
      </li>
    </ul>
  }
}
