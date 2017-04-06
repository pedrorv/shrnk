import {
  SHRTR_LINK_CHANGED,
  SHRTR_LINK_SUBMIT_PENDING,
  SHRTR_LINK_SUBMIT_SUCCESS,
  SHRTR_LINK_SUBIMT_FAILED
} from '../actions/types'

const INITIAL_STATE = {
  link: '',
  error: '',
  loading: false,
  shrtrLink: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHRTR_LINK_CHANGED:
      return { ...state, link: action.payload }
    case SHRTR_LINK_SUBMIT_PENDING:
      return { ...state, error: '', loading: true }
    case SHRTR_LINK_SUBMIT_SUCCESS:
      return { ...state, ...INITIAL_STATE, shrtrLink: action.payload }
    case SHRTR_LINK_SUBIMT_FAILED:
      return { ...state, ...INITIAL_STATE, error: action.payload }
    default:
      return state
  }
}