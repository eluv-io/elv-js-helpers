// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const failsModelCheck = TH.requireSrcFile('Boolean/failsModelCheck')

describe('failsModelCheck JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')
    failsModelCheck(PositiveIntModel, 1).should.eql(false)
    failsModelCheck(PositiveIntModel, -1).should.eql(true)
    // function is curried: call with just first param to obtain a narrower function
    const isNotPositiveInt = failsModelCheck(PositiveIntModel)
    isNotPositiveInt(1).should.eql(false)
    isNotPositiveInt(0).should.eql(true)
    isNotPositiveInt('foo').should.eql(true)
  })
})
