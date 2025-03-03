// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const throwsException = TH.requireSrcFile('Boolean/throwsException')

describe('throwsException JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    throwsException(() => Object().foo.bar).should.eql(true)
    throwsException(() => 42 / 42).should.eql(false)
    // returns `true` if passed something that cannot be called.
    throwsException(0).should.eql(true)
  })
})
