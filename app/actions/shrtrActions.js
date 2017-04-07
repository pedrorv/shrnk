import {
  SHRTR_LINK_SUBMIT_PENDING,
  SHRTR_LINK_SUBMIT_SUCCESS,
  SHRTR_LINK_SUBIMT_FAILED
} from './types'

const shortenLinkFail = (dispatch) => {
  dispatch({ type: SHRTR_LINK_SUBIMT_FAILED })
}

const shortenLinkSucces = (dispatch, shrtrLink) => {
  dispatch({ type: SHRTR_LINK_SUBMIT_SUCCESS, payload: shrtrLink })
}