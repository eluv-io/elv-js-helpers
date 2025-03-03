// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const UUIDStrUpperModel = TH.requireSrcFile('Model/UUIDStrUpperModel')

describe('UUIDStrUpperModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    TH.expect(() => UUIDStrUpperModel('0')).to.throw(
      `Value is not in upper case UUID format '00000000-0000-0000-0000-000000000000' (got: "0")`
    )
    UUIDStrUpperModel('ABCDEF00-0000-0000-0000-000000000000').should.eql('ABCDEF00-0000-0000-0000-000000000000')
    TH.expect(() => UUIDStrUpperModel('abcdef00-0000-0000-0000-000000000000')).to.throw(
      `Value is not in upper case UUID format '00000000-0000-0000-0000-000000000000' (got: "abcdef00-0000-0000-0000-000000000000")`
    )
    TH.expect(() => UUIDStrUpperModel('abcdef00-0000-0000-0000-ABCDEF000000')).to.throw(
      `Value is not in upper case UUID format '00000000-0000-0000-0000-000000000000' (got: "abcdef00-0000-0000-0000-ABCDEF000000")`
    )
  })
})
