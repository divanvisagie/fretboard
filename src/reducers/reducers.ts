import {combineReducers} from 'redux'

import {tuningOptions, tuning, tuningModalOpen} from './tuning'
import focusNote, {focusNoteState} from './focusNote'
import selectedNotes from './selectedNotes'
import frets from './frets'
import key from './key'
import {language, languages, translations} from './languages'

import Scale, {scales} from '../core/Scale'
import Note from '../core/Note';

const [firstScale] = scales
const scaleNotesState = Scale(focusNoteState, firstScale.sequence)
    .noteSequence()
    .map((n: Note) => n.toString())

function scale (state = firstScale, action) {
    switch (action.type) {
    case 'SET_SCALE':
        state = action.value
        return state
    default:
        return state
    }
}

function scaleNotes (state: Array<string> = scaleNotesState, action): Array<string> {
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
    selectedNotes,
    language,
    languages,
    translations
})
