// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const omit = TH.requireSrcFile('Functional/omit')

describe('omit JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const myObject = {foo: 'f', bar: 'b'}
    omit(['foo'], myObject).should.eql({bar: 'b'})
  })
})
