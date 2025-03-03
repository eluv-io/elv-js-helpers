// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isEquivalent = TH.requireSrcFile('Boolean/isEquivalent')

describe('isEquivalent JSDoc example', () => {
  it('should execute correctly as described', () => {
    isEquivalent(42, 42).should.eql(true)
    isEquivalent(42, '42').should.eql(false)
    isEquivalent([42], [42]).should.eql(true)
    // element order matters for arrays
    isEquivalent([1, 42], [1, 42]).should.eql(true)
    isEquivalent([1, 42], [42, 1]).should.eql(false)
    // property order in objects does not matter
    const obj1 = {foo: 42, bar: 1}
    const obj2 = {bar: 1, foo: 42}
    isEquivalent(obj1, obj2).should.eql(true)
    // function is curried: can call with fewer params to obtain a more specific function:
    const isEmptyObject = isEquivalent({})
    isEmptyObject({}).should.eql(true)
    isEmptyObject(42).should.eql(false)
  })
})
