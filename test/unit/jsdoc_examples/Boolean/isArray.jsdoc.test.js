// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isArray = TH.requireSrcFile('Boolean/isArray')

describe('isArray JSDoc example', () => {
  it('should execute correctly as described', () => {
    isArray([1, 2, 3]).should.eql(true)
    isArray(1, 2, 3).should.eql(false)
    isArray('foo').should.eql(false)
  })
})
