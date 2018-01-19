import React, {Component} from 'react'

import _ from 'underscore'
import './MarkerBoard.css'

class MarkerBoard extends Component {
  constructor (props) {
    super(props)

    this.range = _.range(1, this.props.frets + 1).map(x => x)
    this.dots = [
      3, 5, 7, 9, 12, 15, 17, 19, 21, 24
    ]
  }

  drawDot (value) {
    if (this.dots.includes(value)) {
      return <div>.</div>
    } else {
      return <div></div>
    }
  }

  render () {
    return (
      <div className="MarkerBoard">
        <div className="nut">Nut</div>

        {this.range.map((x, i) =>
          <div className="fret" key={i}>
            {this.drawDot(x)}
          </div>
        )}
      </div>
    )
  }
}

export default MarkerBoard
