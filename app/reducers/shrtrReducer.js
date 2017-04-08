import {
  SHRTR_LINK_SUBMIT_PENDING,
  SHRTR_LINK_SUBMIT_SUCCESS,
  SHRTR_LINK_SUBMIT_FAILED
} from '../actions/types'

const INITIAL_STATE = {
  error: '',
  loading: false,
  shrtrLink: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHRTR_LINK_SUBMIT_PENDING:
      return { ...state, error: '', loading: true }
    case SHRTR_LINK_SUBMIT_SUCCESS:
      return { ...state, ...INITIAL_STATE, shrtrLink: action.payload }
    case SHRTR_LINK_SUBMIT_FAILED:
      return { ...state, ...INITIAL_STATE, error: action.payload }
    default:
      return state
  }
}