import {put, takeLatest, select} from 'redux-saga/effects'
import {Scale} from '../core/Scale'

const getFocusNote = (state) => state.focusNote
const getScale = (state) => state.scale

function * updateScaleNotes (action) {
    const focusNote = yield select(getFocusNote)
    const notes = Scale(focusNote, action.value.sequence).noteSequence().map(n => n.toString())

    yield put({
        type : 'SET_SCALE_NOTES',
        value: notes
    })
}

function * updateScaleNotesOnFocusNoteChange (action) {
    const scale = yield select(getScale)
    const notes = Scale(action.value, scale.sequence).noteSequence().map(n => n.toString())

    yield put({
        type : 'SET_SCALE_NOTES',
        value: notes
    })
}

function * setScaleSaga () {
    yield takeLatest('SET_SCALE', updateScaleNotes)
}

function * setFocusNoteSaga () {
    yield takeLatest('SET_FOCUS_NOTE', updateScaleNotesOnFocusNoteChange)
}

export {
    setScaleSaga,
    setFocusNoteSaga
}
