import {
  SHRTR_LINK_SUBMIT_PENDING,
  SHRTR_LINK_SUBMIT_SUCCESS,
  SHRTR_LINK_SUBMIT_FAILED,
  SHRTR_LINK_INVALID
} from './types'

import firebase from 'firebase'
import { shrnkLink } from '../api'

export const shortenLink = (link) => {
  return (dispatch) => {
    dispatch({ type: SHRTR_LINK_SUBMIT_PENDING })
    
    shrnkLink(link)
      .then(newLink => shortenLinkSuccess(dispatch, newLink))
      .catch((error) => shortenLinkFail(dispatch, error.code))
  }
}

const shortenLinkFail = (dispatch, error) => {
  dispatch({ type: SHRTR_LINK_SUBMIT_FAILED, payload: error })
}

const shortenLinkSuccess = (dispatch, shrtrLink) => {
  dispatch({ type: SHRTR_LINK_SUBMIT_SUCCESS, payload: shrtrLink })
}

export const invalidLink = () => {
  return (dispatch) => {
    dispatch({ type: SHRTR_LINK_INVALID, payload: 'The link you want to shorten is invalid.' })
  }
}