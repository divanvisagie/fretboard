import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import ReactGA from 'react-ga'

import 'normalize.css'
// import 'milligram'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'

import reducers from './reducers/reducers'

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactGA.initialize('UA-113213939-1', {
    debug: (window.location.hostname !== 'dvisagie.com')
})
ReactGA.pageview(window.location.pathname)

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'))
