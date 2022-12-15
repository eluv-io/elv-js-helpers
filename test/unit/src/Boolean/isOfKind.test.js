const chai = require('chai')
chai.should()

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

const isOfKind = require('../../../../src/Boolean/isOfKind')

describe('isOfKind', () => {

  it('should return true if kind matches', () => {
    isOfKind('Array', [1, 2, 3]).should.be.true
  })

  it('should return false if kind does not match', () => {
    isOfKind('Array', 'foo').should.be.false
    isOfKind('Array', 1, 2, 3).should.be.false
    isOfKind('Array', undefined).should.be.false
    isOfKind('Array', null).should.be.false
    isOfKind('Array', Ok([1,2,3])).should.be.false
    isOfKind('Array', Err([1,2,3])).should.be.false
  })
})
