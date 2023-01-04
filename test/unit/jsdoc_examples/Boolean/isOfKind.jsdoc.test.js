// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isOfKind = TH.requireSrcFile('Boolean/isOfKind')

describe('isOfKind JSDoc example', () => {
  it('should execute correctly as described', () => {
    isOfKind('Array', [1, 2, 3]).should.eql(true)
    isOfKind('Array', 1, 2, 3).should.eql(false)
    isOfKind('Array', 'foo').should.eql(false)
  })
})
