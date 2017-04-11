import firebase from 'firebase'

import { generateID } from '../utils'

export const getLinkInfo = (id) => {
  return firebase.database()
          .ref('links')
          .orderByChild('id')
          .equalTo(id)
          .once('value')
          .then(data => {
            if (!data.val()) return Promise.reject()

            let val = data.val()
            let keys = Object.keys(val)

            return {
              linkInfo: val[keys[0]],
              key: keys[0]
            }
          })
}

export const updateLinkAccessCount = (key) => {
  let user = firebase.auth().currentUser

  return firebase.database()
          .ref('links')
          .child(key)
          .child('access_count')
          .transaction((access_count) => access_count + 1)
}

export const loggedUser = () => {
  let user = firebase.auth().currentUser

  if (user) return Promise.resolve(user)

  return firebase.auth().signInAnonymously()
}

export const shrnkLink = (link) => {
  
  return loggedUser()
          .then(user => {
            const linksRef = firebase.database().ref('links')

            const newLink = {
              id: generateID(6),
              link: link.toLowerCase(),
              access_count: 0,
              user: user.uid
            }

            return linksRef.push(newLink)
                    .then(() => newLink)
          })
}