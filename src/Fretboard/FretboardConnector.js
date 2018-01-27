import Fretboard from './Fretboard'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    tuning   : state.tuning.value,
    frets    : state.frets,
    focusNote: state.focusNote
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onNoteClick (note) {
      dispatch({
        type : 'SET_FOCUS_NOTE',
        value: note
      })
    }
  }
}

const FretboardConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fretboard)

export default FretboardConnector
