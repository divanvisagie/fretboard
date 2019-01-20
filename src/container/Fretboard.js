import React, {Component} from 'react'
import {connect} from 'react-redux'

import './Fretboard.css'

import {reverse} from 'ramda'

import MarkerBoard from '../presentational/MarkerBoard'

import GuitarString from '../presentational/GuitarString'

class Fretboard extends Component {
    render () {
        return (
            <div className="Fretboard">
                <div>
                    {reverse(this.props.tuning).map((note, i) =>
                        <GuitarString rootNote={note}
                            frets={this.props.frets}
                            onClick={this.props.onNoteClick}
                            key={i}
                            focusNote={this.props.focusNote} />
                    )}
                </div>
                <MarkerBoard frets={this.props.frets}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tuning   : state.tuning.value,
        frets    : state.frets,
        focusNote: state.focusNote
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
