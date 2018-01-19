import React, {Component} from 'react'

import './NutView.css'

class NutView extends Component {
  render () {
    return (
      <div className='NutView'>
        {this.props.note.toString()}
      </div>
    )
  }
}

export default NutView
