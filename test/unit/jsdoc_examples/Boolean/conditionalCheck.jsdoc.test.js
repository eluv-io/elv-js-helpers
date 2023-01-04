// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const conditionalCheck = TH.requireSrcFile('Boolean/conditionalCheck')

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
