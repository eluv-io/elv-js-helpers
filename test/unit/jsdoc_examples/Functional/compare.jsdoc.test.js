// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const compare = TH.requireSrcFile('Functional/compare')

describe('compare JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    compare(1, 2).should.eql(-1)
    compare(2, 2).should.eql(0)
    compare(2, 1).should.eql(1)
    compare('a', 'b').should.eql(-1)
    compare(null, undefined).should.eql(0)
    compare(undefined, null).should.eql(0)
    compare([1], 'a') //= -1
  })
})
