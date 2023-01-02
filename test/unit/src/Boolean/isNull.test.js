const TH = require('../../../test-helpers')
const isNull = TH.requireSrcFile('Boolean/isNull')

// AUTO-GENERATED TEST: Do not modify the following "describe('isNull JSDoc example', ...)" block:
describe('isNull JSDoc example', () => {
  it('should execute correctly as described', () => {
    isNull(null).should.eql(true)
    isNull().should.eql(false)
    isNull(undefined).should.eql(false)
    isNull(0).should.eql(false)
    // extra arguments ignored:
    isNull(1, null, null).should.eql(false)
    isNull('foo').should.eql(false)
    // extra argument ignored:
    isNull(null, 3).should.eql(true)
  })
})
