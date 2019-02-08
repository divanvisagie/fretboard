import React, {useState} from 'react'

import { connect } from 'react-redux'

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'reactstrap'

const TuningModal = ({ modalOpen, toggleModal }) => {
    const initialValueState = ['E']

    const [name, setName] = useState()
    const [values, setValues] = useState(initialValueState)

    const addString = () => {
        setValues([...values, 'C'])
    }

    const save = () => {
        setValues(initialValueState)
        setName('')
        toggleModal()
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
                {values.map((x, i) => <div>
                    String: {i + 1} <Input key={i} value={x} />
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
        }
    }
}

const AddTuningModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(TuningModal)

export default AddTuningModal
