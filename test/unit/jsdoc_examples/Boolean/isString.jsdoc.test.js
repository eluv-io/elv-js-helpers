// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isString = TH.requireSrcFile('Boolean/isString')

describe('isString JSDoc example', () => {
  it('should execute correctly as described', () => {
    isString([1, 2, 3]).should.eql(false)
    // extra arguments ignored:
    isString(1, 'foo', 'bar').should.eql(false)
    isString('foo').should.eql(true)
    // extra argument ignored:
    isString('foo', 3).should.eql(true)
  })
})
