const TH = require('../../../test-helpers')
const conditionalCheck = TH.requireSrcFile('Boolean/conditionalCheck')

// AUTO-GENERATED TEST: Do not modify the following "describe('conditionalCheck JSDoc example', ...)" block:
describe('conditionalCheck JSDoc example', () => {
  it('should execute correctly as described', () => {
    const isString = TH.requireSrcFile('Boolean/isString')
    const stringStartsWithF = conditionalCheck(isString, x => x.startsWith('f'))
    // Skip assertion, value is not a string:
    stringStartsWithF(1).should.eql(true)
    stringStartsWithF('foo').should.eql(true)
    stringStartsWithF('bar').should.eql(false)
  })
})
