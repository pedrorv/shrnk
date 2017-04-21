import { combineReducers } from 'redux'
import shrnkReducer from './shrnkReducer'

export default combineReducers({
  shrnk: shrnkReducer
})