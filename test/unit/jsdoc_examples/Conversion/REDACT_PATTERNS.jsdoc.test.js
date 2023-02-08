// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const REDACT_PATTERNS = TH.requireSrcFile('Conversion/REDACT_PATTERNS')

describe('REDACT_PATTERNS JSDoc example', () => {
  it('should execute correctly as described', () => {
    const shouldRedact = x => REDACT_PATTERNS.find(pattern => pattern.test(x)) !== undefined
    shouldRedact('Password').should.eql(true)
    shouldRedact('My_secret').should.eql(true)
    shouldRedact('foo').should.eql(false)
  })
})
