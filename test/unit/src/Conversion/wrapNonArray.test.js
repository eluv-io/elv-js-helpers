const chai = require('chai')
chai.should()

const equals = require('ramda/src/equals')

const wrapNonArray = require('../../../../src/Conversion/wrapNonArray')

describe('wrapNonArray', () => {

  it('should wrap non-array values', () => {
    equals(wrapNonArray(42), [42]).should.be.true
  })

  it('should not wrap array values', () => {
    equals(wrapNonArray([42]), [42]).should.be.true
    equals(wrapNonArray([[42]]), [[42]]).should.be.true
  })

})
