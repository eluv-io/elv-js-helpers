const chai = require('chai')
chai.should()
const expect = chai.expect

const _throwIfFalse = require('../../../../src/internal/_throwIfFalse')

describe('_throwIfFalse', () => {

  it('should throw an exception with the message passed in when passed a false value', () => {
    expect(() => _throwIfFalse('foo',false)).to.throw('foo')
  })

  it('should not throw an exception when passed a true value', () => {
    _throwIfFalse('foo',true)
  })

})
