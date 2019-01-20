import {connect} from 'react-redux'
import React, {Fragment} from 'react'

import {notes} from '../core/Note'
import {scales} from '../core/Scale'

const ScaleSelectorComponent = ({focusNote,
    scale,
    scaleName,
    handleScaleChange}) =>
    <Fragment>
        <span>Scale</span>

        <select
            value={scaleName}
            onChange={handleScaleChange}>

            {scales.map((x, key) =>
                <option value={x.name} key={key}>{x.name}</option>
            )}

        </select>
    </Fragment>

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ScaleSelectorConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScaleSelectorComponent)

export default ScaleSelectorConnector
