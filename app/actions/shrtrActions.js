import {
  SHRTR_LINK_CHANGED,
  SHRTR_LINK_SUBMIT_PENDING,
  SHRTR_LINK_SUBMIT_SUCCESS,
  SHRTR_LINK_SUBIMT_FAILED
} from './types'

export const shortenLinkChanged = (text) => {
  return { type: SHRTR_LINK_CHANGED, payload: text }
}

const shortenLinkFail = (dispatch) => {
  dispatch({ type: SHRTR_LINK_SUBIMT_FAILED })
}

const shortenLinkSucces = (dispatch, shrtrLink) => {
  dispatch({ type: SHRTR_LINK_SUBMIT_SUCCESS, payload: shrtrLink })
}