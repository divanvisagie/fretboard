import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import ReactGA from 'react-ga'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'

import reducers from './reducers/reducers'
import { setScaleSaga, setFocusNoteSaga } from './sagas/scale-saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleWare = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleWare))
)
sagaMiddleWare.run(setScaleSaga)
sagaMiddleWare.run(setFocusNoteSaga)

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
