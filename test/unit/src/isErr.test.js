const chai = require('chai')
chai.should()

const {Err, Ok} = require('crocks/Result')

const isErr = require('../../../src/isErr')

describe('isErr', () => {
  it('should return true for Err', () => {
    isErr(Err(42)).should.be.true
  })

  it('should return false for Ok', () => {
    isErr(Ok(42)).should.be.false
  })

  it('should return false for non-Result values', () => {
    isErr(5).should.be.false
    isErr(undefined).should.be.false
    isErr(null).should.be.false
    isErr('foo').should.be.false
  })

})
