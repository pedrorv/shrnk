import {
  SHRTR_LINK_SUBMIT_PENDING,
  SHRTR_LINK_SUBMIT_SUCCESS,
  SHRTR_LINK_SUBMIT_FAILED
} from './types'

import firebase from 'firebase'
import { generateID } from '../utils' 

export const shortenLink = (link) => {
  return (dispatch) => {
    dispatch({ type: SHRTR_LINK_SUBMIT_PENDING })

    const linksRef = firebase.database().ref('links')
    const newLinkRef = linksRef.push()
    const newLink = {
      id: generateID(6),
      link,
      access_count: 0
    }

    newLinkRef
      .set(newLink)
      .then(() => shortenLinkSuccess(dispatch, newLink))
      .catch(() => shortenLinkFail(dispatch))
  }
}

const shortenLinkFail = (dispatch) => {
  dispatch({ type: SHRTR_LINK_SUBMIT_FAILED, payload: 'Unable to shorten link.' })
}

const shortenLinkSuccess = (dispatch, shrtrLink) => {
  dispatch({ type: SHRTR_LINK_SUBMIT_SUCCESS, payload: shrtrLink })
}