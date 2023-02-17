// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const UUIDStrModel = TH.requireSrcFile('Model/UUIDStrModel')

describe('UUIDStrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    TH.expect(() => UUIDStrModel('0')).to.throw(
      `Value is not in UUID format '00000000-0000-0000-0000-000000000000' (got: "0")`
    )
    UUIDStrModel('ABCDEF00-0000-0000-0000-000000000000').should.eql('ABCDEF00-0000-0000-0000-000000000000')
    UUIDStrModel('abcdef00-0000-0000-0000-000000000000').should.eql('abcdef00-0000-0000-0000-000000000000')
    UUIDStrModel('abcdef00-0000-0000-0000-ABCDEF000000').should.eql('abcdef00-0000-0000-0000-ABCDEF000000')
  })
})
