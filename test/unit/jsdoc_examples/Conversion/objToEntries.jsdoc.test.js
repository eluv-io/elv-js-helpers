// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const objToEntries = TH.requireSrcFile('Conversion/objToEntries')

describe('objToEntries JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const obj = {a: 1, b: {c: 3, d: 4}}
    objToEntries(obj).should.eql([
      ['a', 1],
      ['b', {c: 3, d: 4}],
    ])
  })
})
