import React, {useState} from 'react'

import { connect } from 'react-redux'

import { NoteSelector } from './FocusNoteSelector'

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'reactstrap'

const TuningModal = ({ modalOpen, toggleModal, addTuning }) => {
    const initialValueState = ['A']

    const [name, setName] = useState('')
    const [values, setValues] = useState(initialValueState)

    const addString = () => {
        setValues([...values, 'C'])
    }

    const handleNoteClick = (note, string) => {
        let v = [...values]
        v[string] = note
        setValues(v)
    }

    const save = () => {
        setValues(initialValueState)
        setName('')
        toggleModal()
        addTuning({
            name,
            value: values
        })
    }

    return (
        <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader>
                Add new Tuning
            </ModalHeader>
            <ModalBody>
                <Input value={name}
                    placeholder='Name'
                    onChange={e => setName(e.target.value)}/>
                {values.map((x, i) => <div key={i}>
                    String: {i + 1} <NoteSelector
                        handleNoteSelected={n => handleNoteClick(n, i)}
                        focusNote={x} />
                </div>)}
                <Button onClick={addString}>+</Button>
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>Close</Button>
                <Button color='info' onClick={save}>Add</Button>
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
