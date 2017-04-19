import {
  SHRNK_LINK_SUBMIT_PENDING,
  SHRNK_LINK_SUBMIT_SUCCESS,
  SHRNK_LINK_SUBMIT_FAILED,
  SHRNK_LINK_INVALID
} from '../actions/types'

const INITIAL_STATE = {
  error: '',
  loading: false,
  shortenedLink: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHRNK_LINK_SUBMIT_PENDING:
      return { ...state, error: '', loading: true, shortenedLink: null }
    case SHRNK_LINK_SUBMIT_SUCCESS:
      return { ...state, ...INITIAL_STATE, shortenedLink: action.payload }
    case SHRNK_LINK_SUBMIT_FAILED:
      return { ...state, ...INITIAL_STATE, error: action.payload }
    case SHRNK_LINK_INVALID:
      return { ...state, error: action.payload, shortenedLink: null }
    default:
      return state
  }
}