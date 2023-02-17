// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const uuid = TH.requireSrcFile('Misc/uuid')

describe('uuid JSDoc example', () => {
  it('should execute correctly as described', () => {
    const RE_UUID_LOWER_CASE = TH.requireSrcFile('Validation/RE_UUID_LOWER_CASE')
    const u = uuid()
    u.length.should.eql(36)
    RE_UUID_LOWER_CASE.test(u).should.eql(true)
  })
})
