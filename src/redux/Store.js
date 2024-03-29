import { createStore, applyMiddleware } from 'redux'
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import logger from 'redux-logger'

import rootReducer from './RootReducer'

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store