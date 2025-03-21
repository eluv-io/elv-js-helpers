// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isNotEmpty = TH.requireSrcFile('Boolean/isNotEmpty')

describe('isNotEmpty JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    isNotEmpty([42]).should.eql(true)
    isNotEmpty([]).should.eql(false)
    isNotEmpty('').should.eql(false)
    isNotEmpty(null).should.eql(true)
    isNotEmpty({}).should.eql(false)
    isNotEmpty({foo: 'bar'}).should.eql(true)
  })
})
