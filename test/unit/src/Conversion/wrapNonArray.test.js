const TH = require('../../../test-helpers')
const wrapNonArray = TH.requireSrcFile('Conversion/wrapNonArray')

// AUTO-GENERATED TEST: Do not modify the following "describe('wrapNonArray JSDoc example', ...)" block:
describe('wrapNonArray JSDoc example', () => {
  it('should execute correctly as described', () => {
    wrapNonArray(42).should.eql([42])
    wrapNonArray([42]).should.eql([42])
    wrapNonArray([0, 42]).should.eql([0, 42])
  })
})

describe('wrapNonArray', () => {
  it('should not wrap array values', () => {
    wrapNonArray([[42]]).should.eql([[42]])
  })
})
