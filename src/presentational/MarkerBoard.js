import React, {Component} from 'react'

import './MarkerBoard.css'
import PropTypes from 'prop-types'

function getMarker (index) {
    if (index === 0) return ''

    const sub = Math.floor(index / 12) * 12
    const subIndex = index - sub

    if (subIndex === 0) return index
    const singles = [3, 5, 7, 9]

    const isSingle = singles.some(x => subIndex / x === 1)
    if (isSingle) return index.toString()
    return ''
}

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
      return range
  }

  drawDot (value) {
      if (this.dots.includes(value)) {
          if (value % 12 === 0) {
              return <div className="dot">{value}</div>
          } else {
              return <div className="dot">{value}</div>
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
                      {getMarker(i + 1)}
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
