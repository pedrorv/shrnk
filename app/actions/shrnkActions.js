import {
  SHRNK_LINK_SUBMIT_PENDING,
  SHRNK_LINK_SUBMIT_SUCCESS,
  SHRNK_LINK_SUBMIT_FAILED,
  SHRNK_LINK_INVALID
} from './types'

import firebase from 'firebase'
import { shrnkLink } from '../api'

export const shortenLink = (link) => {
  return (dispatch) => {
    dispatch({ type: SHRNK_LINK_SUBMIT_PENDING })
    
    shrnkLink(link)
      .then(newLink => shortenLinkSuccess(dispatch, newLink))
      .catch((error) => shortenLinkFail(dispatch, error.code))
  }
}

const shortenLinkFail = (dispatch, error) => {
  dispatch({ type: SHRNK_LINK_SUBMIT_FAILED, payload: error })
}

const shortenLinkSuccess = (dispatch, shortenedLink) => {
  dispatch({ type: SHRNK_LINK_SUBMIT_SUCCESS, payload: shortenedLink })
}

export const invalidLink = () => {
  return (dispatch) => {
    dispatch({ type: SHRNK_LINK_INVALID, payload: 'The link you want to shorten is invalid.' })
  }
}