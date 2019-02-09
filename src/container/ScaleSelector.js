import { connect } from 'react-redux'
import React, { Fragment, Component } from 'react'

import { scales, Scale } from '../core/Scale'

import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

import './ScaleSelector.css'

class ScaleSelectorComponent extends Component {
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
        const { targetNote, scale, handleScaleChange } = this.props

        const noteSequence = Scale(targetNote, scale.sequence).noteSequence().map((x) => x.toString())

        return (
            <Fragment>
                <div className='ScaleSelector-label noselect'>Scale
                    <Dropdown className='ScaleSelector-selector' isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                        <DropdownToggle caret>
                            {scale.name}
                        </DropdownToggle>
                        <DropdownMenu>
                            {scales.map((x, key) =>
                                <DropdownItem key={key} onClick={e => handleScaleChange(x)}>
                                    {x.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div className='ScaleSelector-sequence'>
                    {scale.sequence.map((n, key) =>
                        <span key={key}>{n}</span>
                    )}
                </div>
                <div className='ScaleSelector-sequence'>
                    {noteSequence.map((n, key) =>
                        <span key={key}>{n}</span>
                    )}
                </div>

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        targetNote: state.focusNote,
        scale     : state.scale
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleScaleChange (scale) {
            dispatch({
                type : 'SET_SCALE',
                value: scale
            })
        }
    }
}

const ScaleSelectorConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScaleSelectorComponent)

export default ScaleSelectorConnector
