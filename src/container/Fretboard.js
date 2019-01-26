import React, {Component} from 'react'
import {connect} from 'react-redux'

import './Fretboard.css'

import {reverse} from 'ramda'

import MarkerBoard from '../presentational/MarkerBoard'

import GuitarString from '../presentational/GuitarString'

class Fretboard extends Component {
    render () {
        const {tuning, frets, onNoteClick, focusNote, scale} = this.props

        return (
            <div className="Fretboard">
                <div>
                    {reverse(tuning).map((note, i) =>
                        <GuitarString rootNote={note}
                            frets={frets}
                            scale={scale}
                            onClick={onNoteClick}
                            key={i}
                            focusNote={focusNote} />
                    )}
                </div>
                <MarkerBoard frets={frets}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tuning   : state.tuning.value,
        frets    : state.frets,
        focusNote: state.focusNote,
        scale    : state.scale
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onNoteClick (note) {
            dispatch({
                type : 'SET_FOCUS_NOTE',
                value: note
            })
        }
    }
}

const FretboardConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Fretboard)

export default FretboardConnector
