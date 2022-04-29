const chai = require('chai')
chai.should()

const {Err, Ok} = require('crocks/Result')

const isOk = require('../../../src/isOk')

describe('isErr', () => {

  it('should return true for Ok', () => {
    isOk(Ok(42)).should.be.true
  })

  it('should return false for Err', () => {
    isOk(Err(42)).should.be.false
  })

  it('should return false for non-Result values', () => {
    isOk(5).should.be.false
    isOk(undefined).should.be.false
    isOk(null).should.be.false
    isOk('foo').should.be.false
  })

})
