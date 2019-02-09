import React from 'react'
import {connect} from 'react-redux'

import './Fretboard.css'

import {reverse} from 'ramda'

import MarkerBoard from '../presentational/MarkerBoard'

import GuitarString from '../presentational/GuitarString'

const Component = ({tuning,
    frets,
    scaleNotes,
    onNoteClick,
    focusNote,
    scale,
    selectedNotes}) =>
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

const Fretboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Fretboard
