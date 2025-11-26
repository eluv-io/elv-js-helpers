// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const roundEven = TH.requireSrcFile('Math/roundEven')

describe('roundEven JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    roundEven(4.1).should.eql(4)
    roundEven(4.5).should.eql(4)
    roundEven(4.9).should.eql(4)
    roundEven(5).should.eql(6)
    roundEven(5.1).should.eql(6)
    roundEven(5.5).should.eql(6)
    roundEven(-4.1).should.eql(-4)
    roundEven(-4.5).should.eql(-4)
    roundEven(-4.9).should.eql(-4)
    roundEven(-5).should.eql(-4)
    roundEven(-5.1).should.eql(-6)
    roundEven(-5.5).should.eql(-6)
  })
})
