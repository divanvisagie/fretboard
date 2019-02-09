import {combineReducers} from 'redux'

import {tuningOptions, tuning, tuningModalOpen} from './tuning'
import focusNote, {focusNoteState} from './focusNote'
import selectedNotes from './selectedNotes'
import frets from './frets'
import key from './key'

import Scale, {scales} from '../core/Scale'

const [firstScale] = scales
const scaleNotesState = Scale(focusNoteState, firstScale.sequence)
    .noteSequence()
    .map(n => n.toString())

function scale (state = firstScale, action) {
    switch (action.type) {
    case 'SET_SCALE':
        state = action.value
        return state
    default:
        return state
    }
}

function scaleNotes (state = scaleNotesState, action) {
    if (action.type === 'SET_SCALE_NOTES') {
        state = action.value
        return state
    }
    return state
}

export default combineReducers({
    focusNote,
    frets,
    key,
    tuningOptions,
    tuning,
    tuningModalOpen,
    scale,
    scaleNotes,
    selectedNotes
})
