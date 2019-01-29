import React, {Component} from 'react'

import './NutView.css'

class NutView extends Component {
    render () {
        return (
            <div className='NutView'>
                <span>{this.props.note.toString()}</span>
            </div>
        )
    }
}

export default NutView
