// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const max = TH.requireSrcFile('Functional/max')

describe('max JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    max([1, 2, 3]).should.eql(3)
    max([1, Infinity]).should.eql(Infinity)
    TH.chai.assert.deepEqual(max([]), undefined)
    TH.chai.assert.deepEqual(max([undefined]), undefined)
    // undefined elements are removed before processing
    max([undefined, 1]).should.eql(1)
    max([1, undefined]).should.eql(1)
    max([1, 2, undefined]).should.eql(2)
    // NaN contaminates comparisons, causing it to take precedence against other numbers
    max([1, NaN]).should.eql(NaN)
    max([1, NaN, Infinity]).should.eql(NaN)
    // arrays are compared element-wise
    max([[1], [2]]).should.eql([2])
    max([[2], [1]]).should.eql([2])
    max([[1], [1, 2]]).should.eql([1, 2])
    max([[2], [1, 2]]).should.eql([2])
    max([[13], [1, 2]]).should.eql([13])
    // string comparison is based on ASCII/Unicode values and are treated as arrays of characters
    max(['a', 'b']).should.eql('b')
    max(['a', 'aa', 'ab']).should.eql('ab')
    max(['a', 'A']).should.eql('a')
    max(['©', 'A']).should.eql('©')
    // mixing types can generate unexpected results
    max([1, [1]]).should.eql([1])
    max([1, [1], '']).should.eql([1])
    max([1, [1], 'x']).should.eql('x')
    max(['x', NaN]).should.eql('x')
  })
})
