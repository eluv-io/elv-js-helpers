// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const negate = TH.requireSrcFile('Functional/negate')

describe('negate JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const isEmpty = a => a.length === 0
    const isNotEmpty = negate(isEmpty)
    isNotEmpty('foo').should.eql(true)
    isNotEmpty('').should.eql(false)
    isNotEmpty([]).should.eql(false)
    isNotEmpty([1, 2, 3]).should.eql(true)
    TH.expect(() => isNotEmpty(undefined)).to.throw("Cannot read properties of undefined (reading 'length')")
  })
})
