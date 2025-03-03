// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isObject = TH.requireSrcFile('Boolean/isObject')

describe('isObject JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    isObject([1, 2, 3]).should.eql(false)
    // extra argument ignored:
    isObject(1, {foo: 'bar'}).should.eql(false)
    isObject('foo').should.eql(false)
    isObject({}).should.eql(true)
    // extra argument ignored:
    isObject({foo: 'bar'}, 3).should.eql(true)
  })
})
