import firebase from 'firebase'
import { expect } from 'chai'

import { loggedUser } from '../../app/api'

describe('API', () => {
  before(() => {
    const config = {
      apiKey: "AIzaSyAD3EEyrhsHvXpn4ofzob_9YPYAeoPWSQw",
      authDomain: "shrtr-test.firebaseapp.com",
      databaseURL: "https://shrtr-test.firebaseio.com",
      projectId: "shrtr-test",
      storageBucket: "shrtr-test.appspot.com",
      messagingSenderId: "771686372363"
    }
    firebase.initializeApp(config)
  })

  describe('loggedUser', () => {
    it('should return a user object', (done) => {
      loggedUser()
        .then(user => {
          expect(user).to.be.a('object')
          expect(user).to.have.property('uid')
          expect(user.uid).to.be.a('string')
          done()
        })
        .catch(done)
    })
  })
})