// unit test for pipe.js

const chai = require('chai')
chai.should()

const pipe = require('../../../../src/Functional/pipe')

describe('pipe', () => {

  it('should work as expected', () => {
    const trim = str => str.trim()
    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
    const trimAndCapitalize = pipe(trim, capitalizeFirst)
    trimAndCapitalize('   foo  ').should.equal('Foo')
  })
})
