import {combineReducers} from 'redux'

import {tuningOptions, tuning, tuningModalOpen} from './tuning'
import selectedNotes from './selectedNotes'

import Scale, {scales} from '../core/Scale'

const loadedFrets = parseInt(localStorage.getItem('frets'), 10) || 24
const [firstScale] = scales
const focusNoteState = 'C'
const scaleNotesState = Scale(focusNoteState, firstScale.sequence).noteSequence().map(n => n.toString())

function frets (state = loadedFrets, action) {
    switch (action.type) {
    case 'SET_FRETS':
        state = parseInt(action.value, 10)
        localStorage.setItem('frets', state)
        return state
    default:
        return state
    }
}

function focusNote (state = focusNoteState, action) {
    switch (action.type) {
    case 'SET_FOCUS_NOTE':
        state = action.value
        return state
    default:
        return state
    }
}

function scale (state = firstScale, action) {
    switch (action.type) {
    case 'SET_SCALE':
        state = action.value
        return state
    default:
        return state
    }
}

function key (state = '', action) {
    if (action.type === 'SET_KEY') {
        state = action.value
    }
    return state
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
