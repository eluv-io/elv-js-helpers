const chai = require('chai')
chai.should()



const wrapNonArray = require('../../../../src/Conversion/wrapNonArray')

describe('wrapNonArray', () => {

  it('should wrap non-array values', () => {
    wrapNonArray(42).should.eql( [42])
  })

  it('should not wrap array values', () => {
    wrapNonArray([42]).should.eql( [42])
    wrapNonArray([[42]]).should.eql( [[42]])
  })

})
