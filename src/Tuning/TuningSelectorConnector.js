import TuningSelector from './TuningSelector'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    tuningOptions: state.tuningOptions,
    tuning       : state.tuning
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleTuningChange (event) {
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
