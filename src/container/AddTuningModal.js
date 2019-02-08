import React, {Component} from 'react'

import { connect } from 'react-redux'

import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

class TuningModal extends Component {
    render () {
        const { modalOpen, modalToggle } = this.props
        return (
            <Modal isOpen={modalOpen} toggle={modalToggle}>
                <ModalHeader>
                    Add new Tuning
                </ModalHeader>
                <ModalBody>
                    This is a modal
                </ModalBody>
                <ModalFooter>
                    <Button onClick={modalToggle}>Close</Button>
                    <Button color='info'>Add</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.tuningModalOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalToggle () {
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
