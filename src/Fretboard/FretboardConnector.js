import Fretboard from './Fretboard'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    tuning: state.tuning.value,
    frets : 12
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick () {
      dispatch({ type: 'SET_FOCUS_NOTE' })
    }
  }
}

const FretboardConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fretboard)

export default FretboardConnector
