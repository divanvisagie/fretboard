import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReactGA from 'react-ga'

import './index.scss'
import App from './App'

import reducers from './reducers/reducers'
import { setScaleSaga, setFocusNoteSaga } from './sagas/scale-saga'
import { setLanuageSaga } from './sagas/language-saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleWare = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleWare))
)
sagaMiddleWare.run(setScaleSaga)
sagaMiddleWare.run(setFocusNoteSaga)
sagaMiddleWare.run(setLanuageSaga)

ReactGA.initialize('UA-113213939-1', {
    debug: (window.location.hostname !== 'divanv.com')
})
ReactGA.pageview(window.location.pathname)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
