const TH = require('../../../test-helpers')
const isString = TH.requireSrcFile('Boolean/isString')

// AUTO-GENERATED TEST: Do not modify the following "describe('isString JSDoc example', ...)" block:
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
