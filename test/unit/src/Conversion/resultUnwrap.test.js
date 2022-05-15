const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('ramda/src/equals')

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

const resultUnwrap = require('../../../../src/Conversion/resultUnwrap')

describe('resultUnwrap', () => {
  it('should return contained value for Ok', () => {
    resultUnwrap(Ok(42)).should.equal(42)
  })

  it('should return array contained value for Err', () => {
    equals(resultUnwrap(Err(42)), [42]).should.be.true
  })

  it('should throw an error for non-Result values', () => {
    expect(() => resultUnwrap(5)).to.throw('Expected a value of type Result, got: Number (5)')
  })
})
