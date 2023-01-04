// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isErr = TH.requireSrcFile('Boolean/isErr')

describe('isErr JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    isErr(Err(['invalid query'])).should.eql(true)
    isErr(Ok(42)).should.eql(false)
    isErr('foo').should.eql(false)
  })
})
