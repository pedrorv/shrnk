import firebase from 'firebase'
import { expect } from 'chai'
const should = require('chai').should()

import { loggedUser, getLinkInfo, updateLinkAccessCount } from '../../app/api'

const testingObjectID = '123456'

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

  describe('getLinkInfo', () => {
    it('should return a link object', (done) => {
      // using a default link from testing database. link id: '123456'
      getLinkInfo(testingObjectID)
        .then(link => {
          expect(link).to.be.a('object')
          expect(link).to.have.property('key')
          expect(link).to.have.property('linkInfo')
          expect(link.linkInfo.id).to.equal(testingObjectID)
          done()
        })
        .catch(done)
    })
  })

  describe('updateLinkAccessCount', () => {
    let testingLink
    before((done) => {
      getLinkInfo(testingObjectID)
        .then(link => {
          testingLink = link
          done()
        })
        .catch(done)
    })

    it('should increase testingObject access_count by one', (done) => {
      updateLinkAccessCount(testingLink.key)
        .then(() => getLinkInfo(testingLink.linkInfo.id))
        .then(link => {
          expect(link.linkInfo.access_count).to.equal(testingLink.linkInfo.access_count + 1)
          done()
        })
        .catch(done)
    })

    it('should throw a permission error updating more than the access_count', (done) => {
      firebase.database()
        .ref('links')
        .child(testingLink.key)
        .set({
          access_count: testingLink.linkInfo.access_count + 2
        })
        .catch(error => {
          should.exist(error)
          done()
        })
    })

    it('should throw a permission error when trying to remove a record', (done) => {
      firebase.database()
        .ref('links')
        .child(testingLink.key)
        .remove()
        .catch(error => {
          should.exist(error)
          done()
        })
    })
  })
})