import { createStore, combineReducers, applyMiddleware } from 'redux'
import appReducer from '../reducers/app'
import memberReducer from '../reducers/member'
import eventReducer from '../reducers/event'
import transactionReducer from '../reducers/transaction'
import logger from 'redux-logger'
import thunk from 'redux-thunk'



const reducers = combineReducers({
  app: appReducer,
  members: memberReducer,
  events: eventReducer,
  transaction: transactionReducer, 
})

const middleware = applyMiddleware(logger, thunk)

export default createStore(reducers, middleware)