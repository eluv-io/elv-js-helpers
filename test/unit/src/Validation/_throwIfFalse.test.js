const chai = require('chai')
chai.should()
const expect = chai.expect

const throwIfFalse = require('../../../../src/Validation/throwIfFalse')

describe('throwIfFalse', () => {

  it('should throw an exception with the message passed in when passed a false value', () => {
    expect(() => throwIfFalse('foo',false)).to.throw('foo')
  })

  it('should not throw an exception when passed a true value', () => {
    throwIfFalse('foo',true)
  })
})
