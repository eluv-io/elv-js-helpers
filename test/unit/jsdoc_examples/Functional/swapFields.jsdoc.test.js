// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const swapFields = TH.requireSrcFile('Functional/swapFields')

describe('swapFields JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const obj = {foo: 1, bar: 2, baz: 3}
    swapFields('foo', 'bar', obj).should.eql({foo: 2, bar: 1, baz: 3})
    TH.expect(() => swapFields('foo', 'qaz', obj)).to.throw("Property 'qaz' not found")
    TH.expect(() => swapFields('foo', 'bar', null)).to.throw('expecting obj to be Object, got null')
  })
})
