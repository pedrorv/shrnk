import { combineReducers } from 'redux'
import shrnkReducer from './shrnkReducer'

export default combineReducers({
  shrtr: shrnkReducer
})