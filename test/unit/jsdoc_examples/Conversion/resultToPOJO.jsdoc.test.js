// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')

describe('resultToPOJO JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')
    resultToPOJO(Ok(42)).should.eql({ok: true, value: 42})
    resultToPOJO(Err(['query invalid'])).should.eql({ok: false, errMsgs: ['query invalid'], errors: ['query invalid']})
    const e = RangeError('value too large')

    TH.sinon.stub(console, 'log')
    dumpJSON(resultToPOJO(Err([e])))
    try {
      TH.chai.assert.deepEqual(
        console.log.getCall(0).args[0],
        `{\n  "ok": false,\n  "errMsgs": [\n    "RangeError: value too large"\n  ],\n  "errors": [\n    {}\n  ]\n}`
      )
    } finally {
      TH.sinon.restore()
    }
  })
})
