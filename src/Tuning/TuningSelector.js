import React, {Component} from 'react'

class TuningSelector extends Component {
  render () {
    return (
      <select value={this.props.tuning.name}
        onChange={this.props.handleTuningChange} >
        {this.props.tuningOptions.map(x =>
          <option value={x}>{x}</option>
        )}
      </select>
    )
  }
}

export default TuningSelector