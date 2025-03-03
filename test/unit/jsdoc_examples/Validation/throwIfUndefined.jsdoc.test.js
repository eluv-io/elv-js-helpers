// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const throwIfUndefined = TH.requireSrcFile('Validation/throwIfUndefined')

describe('throwIfUndefined JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    let u
    const x = 0
    let y = 42
    TH.expect(() => throwIfUndefined('value is undefined', u)).to.throw('value is undefined')
    throwIfUndefined('value is undefined', x).should.eql(0)
    throwIfUndefined('value is undefined', y).should.eql(42)
    TH.expect(() => throwIfUndefined('value is undefined')()).to.throw('value is undefined')
  })
})
