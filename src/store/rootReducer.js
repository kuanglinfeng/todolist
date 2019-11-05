import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import testReducer from './testReducer'

const rootReducer = combineReducers({ todoReducer, testReducer })

export default rootReducer





