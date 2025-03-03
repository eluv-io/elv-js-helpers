// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const base58Decode = TH.requireSrcFile('Conversion/base58Decode')

describe('base58Decode JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const bytes = base58Decode('2PDzvA279deFCZe2SV1B6NQQkDE')
    const hexString = Buffer.from(bytes).toString('hex')

    TH.sinon.stub(console, 'log')
    console.log(hexString)
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], '01b6368fd21198ff5f97b00dc3918d6215bca039')
    } finally {
      TH.sinon.restore()
    }
  })
})
