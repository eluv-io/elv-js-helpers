// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isOk = TH.requireSrcFile('Boolean/isOk')

describe('isOk JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    isOk(Err(['invalid query'])).should.eql(false)
    isOk(Ok(42)).should.eql(true)
    isOk('foo').should.eql(false)
  })
})
