// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isEmpty = TH.requireSrcFile('Boolean/isEmpty')

describe('isEmpty JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    isEmpty([42]).should.eql(false)
    isEmpty([]).should.eql(true)
    isEmpty('').should.eql(true)
    isEmpty(null).should.eql(false)
    isEmpty({}).should.eql(true)
    isEmpty({foo: 'bar'}).should.eql(false)
  })
})
