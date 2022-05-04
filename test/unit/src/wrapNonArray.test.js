const chai = require('chai')
chai.should()

const R = require('ramda')

const wrapNonArray = require('../../../src/wrapNonArray')

describe('wrapNonArray', () => {

  it('should wrap non-array values', () => {
    R.equals(wrapNonArray(42), [42]).should.be.true
  })

  it('should not wrap array values', () => {
    R.equals(wrapNonArray([42]), [42]).should.be.true
    R.equals(wrapNonArray([[42]]), [[42]]).should.be.true
  })

})
