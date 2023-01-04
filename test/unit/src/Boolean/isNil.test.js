const TH = require('../../../test-helpers')
const isNil = TH.requireSrcFile('Boolean/isNil')

describe('isNil', () => {
  it('should work as expected', () => {
    isNil().should.eql(true)
    isNil(undefined).should.eql(true)
    isNil(null).should.eql(true)
    isNil(42).should.eql(false)
  })

  it('should ignore extra arguments', () => {
    isNil(42, undefined).should.eql(false)
    isNil(undefined, 42).should.eql(true)
  })
})
