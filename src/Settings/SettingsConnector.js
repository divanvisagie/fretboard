import Settings from './Settings'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    frets: state.frets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFretsChange (event) {
      dispatch({
        type : 'SET_FRETS',
        value: event.target.value
      })
    }
  }
}

const SettingsConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingsConnector
