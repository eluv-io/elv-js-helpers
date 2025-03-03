// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const throwIfTrue = TH.requireSrcFile('Validation/throwIfTrue')

describe('throwIfTrue JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const x = 0
    const y = 42
    TH.expect(() => throwIfTrue('division by zero', x === 0)).to.throw('division by zero')
    throwIfTrue('division by zero', y === 0).should.eql(false)
    TH.chai.assert.deepEqual(throwIfTrue('foo', null), null)
    throwIfTrue('foo', 0).should.eql(0)
  })
})
