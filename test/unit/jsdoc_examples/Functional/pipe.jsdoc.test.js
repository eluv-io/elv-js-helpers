// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const pipe = TH.requireSrcFile('Functional/pipe')

describe('pipe JSDoc example', () => {
  it('should execute correctly as described', () => {
    // function has only one input, no need to curry
    const trim = str => str.trim()
    // function has only one input, not need to curry
    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
    const trimAndCapitalize = pipe(trim, capitalizeFirst)
    trimAndCapitalize('   foo  ').should.eql('Foo')
  })
})
