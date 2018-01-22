import React, {Component} from 'react'

import './Icon.css'

class Icon extends Component {
  render () {
    return (
      <div className="Icon">
        <div className="strings">
          <div className="string"></div>
          <div className="string"></div>
          <div className="string"></div>
          <div className="string"></div>
        </div>

        <div className="fret-board">
          <div className="fret"></div>
          <div className="fret middle">
            <div className="marker"></div>
            <div className="marker"></div>
          </div>
          <div className="fret"></div>
        </div>




      </div>
    )
  }
}

export default Icon
