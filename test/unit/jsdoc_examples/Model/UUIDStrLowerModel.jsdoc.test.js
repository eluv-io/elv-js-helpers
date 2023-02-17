// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const UUIDStrLowerModel = TH.requireSrcFile('Model/UUIDStrLowerModel')

describe('UUIDStrLowerModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    TH.expect(() => UUIDStrLowerModel('0')).to.throw(
      `Value is not in lower case UUID format '00000000-0000-0000-0000-000000000000' (got: "0")`
    )
    TH.expect(() => UUIDStrLowerModel('ABCDEF00-0000-0000-0000-000000000000')).to.throw(
      `Value is not in lower case UUID format '00000000-0000-0000-0000-000000000000' (got: "ABCDEF00-0000-0000-0000-000000000000")`
    )
    UUIDStrLowerModel('abcdef00-0000-0000-0000-000000000000').should.eql('abcdef00-0000-0000-0000-000000000000')
    TH.expect(() => UUIDStrLowerModel('abcdef00-0000-0000-0000-ABCDEF000000')).to.throw(
      `Value is not in lower case UUID format '00000000-0000-0000-0000-000000000000' (got: "abcdef00-0000-0000-0000-ABCDEF000000")`
    )
  })
})
