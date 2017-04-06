import { combineReducers } from 'redux'
import shrtrReducer from './shrtrReducer'

export default combineReducers({
  shrtr: shrtrReducer
})