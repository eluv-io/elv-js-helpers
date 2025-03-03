// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const identity = TH.requireSrcFile('Functional/identity')

describe('identity JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    identity(42).should.eql(42)
  })
})
