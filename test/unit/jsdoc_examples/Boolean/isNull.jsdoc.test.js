// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isNull = TH.requireSrcFile('Boolean/isNull')

describe('isNull JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    isNull(null).should.eql(true)
    isNull().should.eql(false)
    isNull(undefined).should.eql(false)
    isNull(0).should.eql(false)
    // extra arguments ignored:
    isNull(1, null, null).should.eql(false)
    isNull('foo').should.eql(false)
    // extra argument ignored:
    isNull(null, 3).should.eql(true)
  })
})
