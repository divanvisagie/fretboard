import React, {Component} from 'react'

import './MarkerBoard.css'
import PropTypes from 'prop-types'

class MarkerBoard extends Component {
  state = {
    range: []
  }

  constructor (props) {
    super(props)

   
    this.state.range = this.getRange(this.props.frets)
  
    this.dots = [
      3, 5, 7, 9, 12, 15, 17, 19, 21, 24
    ]
  }

  getRange (frets) {
    let range = []
    for (let i = 1; i < frets + 1; i++) {
      range.push(i)
    }
    console.log(range.length, frets)
    return range
  }

  drawDot (value) {
    if (this.dots.includes(value)) {
      if (value % 12 === 0) {
        return <div className="dot">• •</div>
      } else {
        return <div className="dot">•</div>
      }
    } else {
      return <div></div>
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      range: this.getRange(nextProps.frets)
    })
  }


  render () {
    return (
      <div className="MarkerBoard">
        <div className="nut"></div>

        {this.state.range.map((x, i) =>
          <div className="fret" key={i}>
            {this.drawDot(x)}
          </div>
        )}
      </div>
    )
  }
}

MarkerBoard.propTypes = {
  frets: PropTypes.number
}

export default MarkerBoard
