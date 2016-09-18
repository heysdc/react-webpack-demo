import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import initialState from './initialState'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

const history = syncHistoryWithStore(browserHistory, store)

export { store, history }