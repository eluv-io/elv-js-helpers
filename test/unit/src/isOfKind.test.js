const chai = require('chai')
chai.should()

const {Err, Ok} = require('crocks/Result')

const isOfKind = require('../../../src/isOfKind')

describe('isOfKind', () => {

  it('should return true if kind matches', () => {
    isOfKind('array', [1, 2, 3]).should.be.true
  })

  it('should return false if kind does not match', () => {
    isOfKind('array', 'foo').should.be.false
    isOfKind('array', 1, 2, 3).should.be.false
    isOfKind('array', undefined).should.be.false
    isOfKind('array', null).should.be.false
    isOfKind('array', Ok([1,2,3])).should.be.false
    isOfKind('array', Err([1,2,3])).should.be.false
  })
})
