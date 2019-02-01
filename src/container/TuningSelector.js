import React, { Fragment, Component } from 'react'

import { connect } from 'react-redux'

import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

import './TuningSelector.css'

let dropdownToggle = true

class TuningSelector extends Component {
    constructor () {
        super()

        this.state = {
            dropdownOpen: false
        }

        this.dropdownToggle = this.dropdownToggle.bind(this)
    }

    dropdownToggle () {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render () {
        const { tuning, handleTuningChange, tuningOptions } = this.props
        return (<Fragment>
            <div className="TuningSelector-label">Tuning</div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                <DropdownToggle caret>
                    {tuning.name}
                </DropdownToggle>
                <DropdownMenu>
                    {tuningOptions.map((x, key) =>
                        <DropdownItem key={key}>{x}</DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        </Fragment>)
    }
}

const mapStateToProps = (state) => {
    return {
        tuningOptions: state.tuningOptions,
        tuning: state.tuning
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleTuningChange(event) {
            dispatch({
                type: 'SET_TUNING',
                name: event.target.value
            })
        }
    }
}

const TuningSelectorConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(TuningSelector)

export default TuningSelectorConnector
