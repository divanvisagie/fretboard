import React, {useReducer} from 'react'

import { connect } from 'react-redux'

import NoteSelector from '../presentational/NoteSelector'

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'reactstrap'

import './AddTuningModal.css'

const initialState = {
    values: ['A'],
    name  : '',
    dirty : false
}

const updateSelectedNoteInState = (state, newValue) => {
    const {note, string} = newValue
    const {name} = state
    let values = [...state.values]
    values[string] = note
    return {
        dirty: true,
        values,
        name
    }
}

const updateNameInState = (state, newValue) => {
    const {values} = state
    return {
        values,
        dirty: true,
        name : newValue
    }
}

const addString = (state) => {
    const {values, name} = state
    return {
        dirty : true,
        name,
        values: [...values, 'A']
    }
}

const tuningReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SELECT_NOTE_AT_STRING':
        return updateSelectedNoteInState(state, action.value)
    case 'UPDATE_NAME':
        return updateNameInState(state, action.value)
    case 'RESET':
        return initialState
    case 'ADD_STRING':
        return addString(state)
    default:
        return state
    }
}

const TuningModal = ({ modalOpen, toggleModal, addTuning }) => {
    const [state, dispatch] = useReducer(tuningReducer, initialState)

    const save = () => {
        toggleModal()
        addTuning({
            name : state.name,
            value: state.values
        })
        dispatch({
            type: 'RESET'
        })
    }

    const cancel = () => {
        dispatch({
            type: 'RESET'
        })
        toggleModal()
    }

    const inputInvalid = () => {
        return state.name.length < 1 && state.dirty
    }

    return (
        <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader>
                Add new Tuning
            </ModalHeader>
            <ModalBody>
                <Input value={state.name}
                    invalid={inputInvalid()}
                    placeholder='Name'
                    onChange={e => dispatch({
                        type : 'UPDATE_NAME',
                        value: e.target.value
                    })}/>
                {state.values.map((x, string) => <div className='AddTuningModal-string' key={string}>
                    <span>String: {string + 1}</span> <NoteSelector
                        handleNoteSelected={note => dispatch({
                            type : 'SELECT_NOTE_AT_STRING',
                            value: { note, string: string }
                        })}
                        focusNote={x} />
                </div>)}
                <Button onClick={e => dispatch({
                    type: 'ADD_STRING'
                })}>+</Button>
            </ModalBody>
            <ModalFooter>
                <Button onClick={cancel}>Cancel</Button>
                <Button color='info'
                    disabled={inputInvalid()}
                    onClick={save}>
                    Add
                </Button>
            </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.tuningModalOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal () {
            dispatch({
                type: 'TOGGLE_TUNING_MODAL_OPEN'
            })
        },
        addTuning (value) {
            dispatch({
                type: 'ADD_TUNING',
                value
            })
        }
    }
}

const AddTuningModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(TuningModal)

export default AddTuningModal
