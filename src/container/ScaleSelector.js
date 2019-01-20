/* eslint-disable no-console */
import {connect} from 'react-redux'
import React, {Fragment, Component} from 'react'

import {notes} from '../core/Note'
import {scales, Scale} from '../core/Scale'

class ScaleSelectorComponent extends Component {
    render () {
        const {targetNote, scale, handleScaleChange} = this.props

        const noteSequence = Scale(targetNote, scale.sequence).noteSequence().map((x) => x.toString())

        return (
            <Fragment>
                <div>Scale</div>
                <div>
                    {scale.sequence.map((n, key) =>
                        <span key={key}>{n}</span>
                    )}
                </div>
                <div>
                    {noteSequence.map((n, key) =>
                        <span key={key}>{n}</span>
                    )}
                </div>
                <select
                    value={scale.name}
                    onChange={event => handleScaleChange(targetNote, event.target.value)}>

                    {scales.map((x, key) =>
                        <option value={x.name} key={key}>{x.name}</option>
                    )}
                </select>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        targetNote: state.focusNote,
        scale     : state.scale
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleScaleChange (focusNote, selected) {
            const scale = scales.find(s => s.name === selected)
            dispatch({
                type : 'SET_SCALE',
                value: scale
            })
        }
    }
}

const ScaleSelectorConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScaleSelectorComponent)

export default ScaleSelectorConnector
