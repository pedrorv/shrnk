import { expect } from 'chai'

import { generateID, isLinkValid, formatLink } from '../../app/utils'


describe('Utils', () => {
  describe('generateID', () => {
    it('should return a string of specified length', () => {
      const length = 6
      const newID = generateID(length)

      expect(newID).to.be.a('string')
      expect(newID).to.have.lengthOf(length)
    })

    it('should return a string that only contains numbers and letters', () => {
      const length = 100
      let result = false
      for (var i = 0; i < 100; i++) {
        result = result || /\W/.test(generateID(length))
      }

      expect(result).to.equal(false)
    })
  })

  describe('isLinkValid', () => {
    it('should return true when a link is valid', () => {
      const link = "www.google.com"
      const isValid = isLinkValid(link)

      expect(isValid).to.equal(true)
    })

    it('should return false when a link is invalid', () => {
      const link = "google"
      const isValid = isLinkValid(link)

      expect(isValid).to.equal(false)
    })
  })

  describe('formatLink', () => {
    it('should add http:// when needed', () => {
      const link = "www.google.com"
      const expectedResult = "http://www.google.com"
      const result = formatLink(link)

      expect(result).to.equal(expectedResult)
    })

    it('should not add http:// when the link already have http://', () => {
      const link = "http://www.google.com"
      const expectedResult = "http://www.google.com"
      const result = formatLink(link)

      expect(result).to.equal(expectedResult)
    })

    it('should not add http:// when the link already have https://', () => {
      const link = "https://www.google.com"
      const expectedResult = "https://www.google.com"
      const result = formatLink(link)

      expect(result).to.equal(expectedResult)
    })
  })
})