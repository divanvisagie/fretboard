import React, { Fragment, Component } from 'react'

import { connect } from 'react-redux'

import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

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
            <div className='TuningSelector-label'>Tuning</div>
            <Dropdown className='TuningSelector-dropdown' isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                <DropdownToggle caret>
                    {tuning.name}
                </DropdownToggle>
                <DropdownMenu>
                    {tuningOptions.map((x, key) =>
                        <DropdownItem key={key} onClick={e => this.handleTuningOptionClick(x)}>
                            {x}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
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
        handleTuningChange (name) {
            dispatch({
                type: 'SET_TUNING',
                name
            })
        }
    }
}

const TuningSelectorConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(TuningSelector)

export default TuningSelectorConnector
