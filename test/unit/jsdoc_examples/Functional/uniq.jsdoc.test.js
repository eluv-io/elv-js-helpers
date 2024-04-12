// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const uniq = TH.requireSrcFile('Functional/uniq')

describe('uniq JSDoc example', () => {
  it('should execute correctly as described', () => {
    uniq([1, 2, 3, 2]).should.eql([1, 2, 3])
    const obj1 = {foo: 'bar'}
    const obj2 = {foo: 'bar'}
    const obj3 = {bar: 'baz'}
    uniq([obj1, obj2, obj3]).should.eql([{foo: 'bar'}, {bar: 'baz'}])
    // Strings are treated as arrays of characters
    uniq('alphabet').should.eql(['a', 'l', 'p', 'h', 'b', 'e', 't'])
    // Non-arrays are converted to empty array
    uniq(99).should.eql([])
  })
})
