// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const redact = TH.requireSrcFile('Conversion/redact')

describe('redact JSDoc example', () => {
  it('should execute correctly as described', () => {
    const data = {
      user: 'foo',
      password: 'my very long password',
      key: '1234',
    }
    const redacted = JSON.stringify(redact(data))

    TH.sinon.stub(console, 'log')
    console.log(redacted)
    try {
      TH.chai.assert.deepEqual(
        console.log.getCall(0).args[0],
        '{"user":"foo","password":"[REDACTED ...word]","key":"[REDACTED]"}'
      )
    } finally {
      TH.sinon.restore()
    }
  })
})
