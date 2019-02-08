import React, {Component} from 'react'

import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

export default class AddTuningModal extends Component {
    constructor () {
        super()
        this.state = {
            modalOpen: false
        }
        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle () {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render () {
        return (
            <Modal isOpen={this.state.modalOpen} toggle={this.modalToggle}>
                <ModalHeader>
                    Add new Tuning
                </ModalHeader>
                <ModalBody>
                    This is a modal
                </ModalBody>
                <ModalFooter>
                    <Button onClick={e => this.setState({ modalOpen: false })}>Close</Button>
                    <Button color='info'>Add</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
