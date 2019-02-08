import React, {Component} from 'react'
import {connect} from 'react-redux'

import './Fretboard.css'

import {reverse} from 'ramda'

import MarkerBoard from '../presentational/MarkerBoard'

import GuitarString from '../presentational/GuitarString'

class Fretboard extends Component {
    clearDisabled () {
        return this.props.selectedNotes.length < 1
    }

    render () {
        const {
            tuning,
            frets,
            scaleNotes,
            onNoteClick,
            focusNote,
            scale,
            selectedNotes
        } = this.props

        return (
            <div className='Fretboard noselect'>
                <div>
                    {reverse(tuning).map((note, i) =>
                        <GuitarString rootNote={note}
                            frets={frets}
                            scale={scale}
                            onClick={n => onNoteClick(n, i)}
                            key={i}
                            string={i}
                            scaleNotes={scaleNotes}
                            selectedNotes={selectedNotes}
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
        tuning       : state.tuning.value,
        frets        : state.frets,
        focusNote    : state.focusNote,
        scale        : state.scale,
        selectedNotes: state.selectedNotes,
        scaleNotes   : state.scaleNotes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onNoteClick (note, string) {
            dispatch({
                type : 'SET_SELECTED_NOTE',
                value: {
                    note,
                    string
                }
            })
        }
    }
}

const FretboardConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Fretboard)

export default FretboardConnector
