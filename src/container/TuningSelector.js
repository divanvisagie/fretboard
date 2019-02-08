import React, { Fragment, Component } from 'react'

import { connect } from 'react-redux'

import { DropdownMenu, DropdownItem, DropdownToggle, ButtonGroup, Button, ButtonDropdown } from 'reactstrap'

import AddTuningModal from './AddTuningModal'

import './TuningSelector.css'

class TuningSelector extends Component {
    constructor () {
        super()

        this.state = {
            dropdownOpen: false
        }

        this.dropdownToggle = this.dropdownToggle.bind(this)
        this.handleTuningOptionClick = this.handleTuningOptionClick.bind(this)
    }

    dropdownToggle () {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    handleTuningOptionClick (x) {
        this.props.handleTuningChange(x)
    }

    render () {
        const { tuning, tuningOptions } = this.props
        return (<Fragment>
            <ButtonGroup className='TuningSelector-dropdown'>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                    <DropdownToggle caret>
                        {tuning.name}
                    </DropdownToggle>
                    <DropdownMenu>
                        {tuningOptions.map((x, key) =>
                            <DropdownItem key={key} onClick={e => this.handleTuningOptionClick(x)}>
                                {x.name}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </ButtonDropdown>
                {/* <Button color='info' onClick={this.modalToggle}>Add</Button> */}
            </ButtonGroup>
            <AddTuningModal/>
        </Fragment>)
    }
}

const mapStateToProps = (state) => {
    return {
        tuningOptions: state.tuningOptions,
        tuning       : state.tuning
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleTuningChange (tuning) {
            dispatch({
                type : 'SET_TUNING',
                value: tuning
            })
        }
    }
}

const TuningSelectorConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(TuningSelector)

export default TuningSelectorConnector
