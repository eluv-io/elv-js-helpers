// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isBase58String = TH.requireSrcFile('Boolean/isBase58String')

describe('isBase58String JSDoc example', () => {
  it('should execute correctly as described', () => {
    isBase58String('foo').should.eql(true)
    isBase58String('FOO').should.eql(false)
    isBase58String(1, 2, 3).should.eql(false)
    // extra arguments are ignored
    isBase58String('foo', 2, 3).should.eql(true)
  })
})
