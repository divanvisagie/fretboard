import React, {useState, useEffect} from 'react'

import { connect } from 'react-redux'

import { NoteSelector } from './FocusNoteSelector'

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'reactstrap'
const initialValueState = ['A']

const TuningModal = ({ modalOpen, toggleModal, addTuning }) => {
    const [name, setName] = useState('')
    const [values, setValues] = useState(initialValueState)
    const [dirty, setDirty] = useState(false)

    const cleanup = () => {
        setDirty(false)
        setName('')
        setValues(initialValueState)
    }

    const addString = () => {
        setValues([...values, 'C'])
    }

    const handleNoteClick = (note, string) => {
        let v = [...values]
        v[string] = note
        setValues(v)
        setDirty(true)
    }

    const handleNameChange = (name) => {
        setName(name)
        setDirty(true)
    }

    const save = () => {
        toggleModal()
        addTuning({
            name,
            value: values
        })
        cleanup()
    }

    const cancel = () => {
        cleanup()
        toggleModal()
    }

    const inputInvalid = () => {
        return name.length < 1 && dirty
    }

    return (
        <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader>
                Add new Tuning
            </ModalHeader>
            <ModalBody>
                <Input value={name}
                    invalid={inputInvalid()}
                    placeholder='Name'
                    onChange={e => handleNameChange(e.target.value)}/>
                {values.map((x, i) => <div key={i}>
                    String: {i + 1} <NoteSelector
                        handleNoteSelected={n => handleNoteClick(n, i)}
                        focusNote={x} />
                </div>)}
                <Button onClick={addString}>+</Button>
            </ModalBody>
            <ModalFooter>
                <Button onClick={cancel}>Cancel</Button>
                <Button color='info'
                    disabled={name.length < 1}
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
