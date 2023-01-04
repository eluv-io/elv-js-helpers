const TH = require('../../../test-helpers')
const pipe = TH.requireSrcFile('Functional/pipe')

describe('pipe', () => {
  it('should work as expected', () => {
    const trim = str => str.trim()
    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
    const trimAndCapitalize = pipe(trim, capitalizeFirst)
    trimAndCapitalize('   foo  ').should.equal('Foo')
  })
})
