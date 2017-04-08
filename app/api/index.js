import firebase from 'firebase'

export const getLinkInfo = (id) => {
  return firebase.database()
          .ref('links')
          .orderByChild('id')
          .equalTo(id)
          .once('value')
          .then(data => {
            if (!data.val()) return Promise.reject('This link doesn\'t exist.')

            let val = data.val()
            let keys = Object.keys(val)

            return {
              linkInfo: val[keys[0]],
              key: keys[0]
            }
          })
}

export const updateLinkAccessCount = (key) => {
  return firebase.database()
          .ref('links')
          .child(key)
          .child('access_count')
          .transaction((access_count) => access_count + 1)
}