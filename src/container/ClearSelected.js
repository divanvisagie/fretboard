import React from 'react'

import { connect } from 'react-redux'

import { Button } from 'reactstrap'

const mapStateToProps = (state) => {
    return {
        selectedNotes: state.selectedNotes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick () {
            dispatch({
                type: 'CLEAR_SELECTED_NOTES'
            })
        }
    }
}

function clearDisabled (selectedNotes) {
    if (selectedNotes.length && selectedNotes.length > 0) {
        return false
    }
    return true
}

const Component = ({ selectedNotes, onClick }) => (
    <Button className='ClearSelected'
        disabled={clearDisabled(selectedNotes)}
        outline
        color='danger'
        onClick={onClick}>
        Clear Selected
    </Button>
)

const ClearSelected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default ClearSelected
