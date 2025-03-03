// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')

describe('passesModelCheck JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')
    passesModelCheck(PositiveIntModel, -1).should.eql(false)
    // function is curried: call with just first param to obtain a narrower function
    const isPositiveInt = passesModelCheck(PositiveIntModel)
    isPositiveInt(1).should.eql(true)
    isPositiveInt(0).should.eql(false)
    isPositiveInt('foo').should.eql(false)
  })
})
