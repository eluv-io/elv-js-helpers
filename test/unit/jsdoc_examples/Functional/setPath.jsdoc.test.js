// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const setPath = TH.requireSrcFile('Functional/setPath')

describe('setPath JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const clone = TH.requireSrcFile('Functional/clone')
    const myObject = {foo: {bar: [1, 2, 3]}}
    setPath(['foo'], 42, clone(myObject)).should.eql({foo: 42})
    setPath(['bar'], 42, clone(myObject)).should.eql({bar: 42, foo: {bar: [1, 2, 3]}})
    // numeric values interpreted as array indexes
    setPath(['foo', 'bar', 0], 42, clone(myObject)).should.eql({foo: {bar: [42, 2, 3]}})
    // empty values inserted into existing arrays if needed
    setPath(['foo', 'bar', 5], 42, clone(myObject)).should.eql({foo: {bar: [1, 2, 3, , , 42]}})
    // WARNING: using a string expressing a number when an array exists at path causes other array elements to be
    // converted to key:value pairs
    setPath(['foo', 'bar', '0'], 42, clone(myObject)).should.eql({foo: {bar: {0: 42, 1: 2, 2: 3}}})
    setPath(['foo', 'bar', 'baz'], 42, clone(myObject)).should.eql({foo: {bar: {0: 1, 1: 2, 2: 3, baz: 42}}})
    // empty values inserted into new arrays if needed
    setPath(['foo', 'bar', 'baz', 5], 42, clone(myObject)).should.eql({
      foo: {bar: {0: 1, 1: 2, 2: 3, baz: [, , , , , 42]}},
    })
    // negative numbers NOT supported as array indexes
    TH.expect(() => setPath(['foo', 'bar', -1], 42, clone(myObject))).to.throw(
      'expecting Array[2] to be String or NonNegativeInteger, got Number -1'
    )
  })
})
