// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const passesObjKeyCheck = TH.requireSrcFile('Boolean/passesObjKeyCheck')

describe('passesObjKeyCheck JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    passesObjKeyCheck(NonBlankStrModel, {' ': 42}).should.eql(false)
    passesObjKeyCheck(NonBlankStrModel, {foo: 42}).should.eql(true)
    // test input not an object, check skipped:
    passesObjKeyCheck(NonBlankStrModel, 3).should.eql(true)
    // function is curried: call with fewer params to obtain a narrower function
    const hasNoBlankKeys = passesObjKeyCheck(NonBlankStrModel)
    hasNoBlankKeys({' ': 42}).should.eql(false)
    hasNoBlankKeys({foo: 42}).should.eql(true)
    // test input not an object, check skipped:
    hasNoBlankKeys(3).should.eql(true)
  })
})
