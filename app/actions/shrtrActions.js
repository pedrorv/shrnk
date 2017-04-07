import {
  SHRTR_LINK_SUBMIT_PENDING,
  SHRTR_LINK_SUBMIT_SUCCESS,
  SHRTR_LINK_SUBIMT_FAILED
} from './types'

import firebase from 'firebase'
import uid from 'uid' 

export const shortenLink = (link) => {
  return (dispatch) => {
    const linksRef = firebase.database().ref('links')
    const newLinkRef = linksRef.push()

    const newLinkID = uid(6)
    newLinkRef.set({
      link,
      id: newLinkID,
      access_count: 0
    })
    .then(link => console.log(link))
    .catch(error => console.log(error))
  }
}

const shortenLinkFail = (dispatch) => {
  dispatch({ type: SHRTR_LINK_SUBIMT_FAILED })
}

const shortenLinkSuccess = (dispatch, shrtrLink) => {
  dispatch({ type: SHRTR_LINK_SUBMIT_SUCCESS, payload: shrtrLink })
}