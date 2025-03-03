// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const objHasKey = TH.requireSrcFile('Boolean/objHasKey')

describe('objHasKey JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    objHasKey('foo', {foo: 'bar'}).should.eql(true)
    objHasKey('bar', {foo: 'bar'}).should.eql(false)
    objHasKey('foo', [1, 2, 3]).should.eql(false)
    objHasKey('1', {1: 42}).should.eql(true)
    objHasKey(1, {1: 42}).should.eql(false)
    // function is curried, pass less than full number of arguments to obtain another narrower function
    const hasFoo = objHasKey('foo')
    hasFoo({foo: 'bar'}).should.eql(true)
    hasFoo({bar: 'baz'}).should.eql(false)
  })
})
