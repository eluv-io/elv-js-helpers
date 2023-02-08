// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const base58Encode = TH.requireSrcFile('Conversion/base58Encode')

describe('base58Encode JSDoc example', () => {
  it('should execute correctly as described', () => {
    const bytes = Uint8Array.from([
      0, 60, 23, 110, 101, 155, 234, 15, 41, 163, 233, 191, 120, 128, 193, 18, 177, 179, 27, 77, 200, 38, 38, 129, 135,
    ])
    base58Encode(bytes).should.eql('16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS')
    const hexString = '5b4b3f4c262aa0f5237cb9a4b59ab0825ddead28'
    const hexBytes = Uint8Array.from(Buffer.from(hexString, 'hex'))
    base58Encode(hexBytes).should.eql('2GmbemxTtSdy1YeFWE6zg6CmG8wy')
  })
})
