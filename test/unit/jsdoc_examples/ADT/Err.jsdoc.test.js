// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const Err = TH.requireSrcFile('ADT/Err')

describe('Err JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const curry = TH.requireSrcFile('Functional/curry')
    const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')
    const liftA2 = TH.requireSrcFile('Functional/liftA2')
    const Ok = TH.requireSrcFile('ADT/Ok')
    const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')
    const okObject = Ok(42)
    // Non-array input automatically converted to 1-element array:
    const errObject1 = Err('failed to obtain first input')
    errObject1.inspect().should.eql('Err [ "failed to obtain first input" ]')
    const errObject2 = Err(['failed to obtain second input'])
    errObject2.inspect().should.eql('Err [ "failed to obtain second input" ]')
    const mult = (a, b) => a * b
    // convert function 'mult' into one that works with values wrapped in Ok / Err
    const multResults = liftA2(curry(mult))
    const goodResult = multResults(okObject, okObject)
    goodResult.inspect().should.eql('Ok 1764')

    TH.sinon.stub(console, 'log')
    dumpJSON(resultToPOJO(goodResult))
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], `{\n  "ok": true,\n  "value": 1764\n}`)
    } finally {
      TH.sinon.restore()
    }
    multResults(errObject1, okObject).inspect().should.eql('Err [ "failed to obtain first input" ]')
    multResults(okObject, errObject2).inspect().should.eql('Err [ "failed to obtain second input" ]')
    const resultTwoBadInputs = multResults(errObject1, errObject2)
    resultTwoBadInputs.inspect().should.eql('Err [ "failed to obtain first input", "failed to obtain second input" ]')

    TH.sinon.stub(console, 'log')
    dumpJSON(resultToPOJO(resultTwoBadInputs))
    try {
      TH.chai.assert.deepEqual(
        console.log.getCall(0).args[0],
        `{\n  "ok": false,\n  "errMsgs": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ],\n  "errors": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ]\n}`
      )
    } finally {
      TH.sinon.restore()
    }
    TH.expect(() => Err([])).to.throw('Err cannot wrap an empty array')
    Err([undefined]).inspect().should.eql('Err [ undefined ]')

    TH.sinon.stub(console, 'log')
    dumpJSON(resultToPOJO(Err([undefined])))
    try {
      TH.chai.assert.deepEqual(
        console.log.getCall(0).args[0],
        `{\n  "ok": false,\n  "errMsgs": [\n    "undefined"\n  ],\n  "errors": [\n    null\n  ]\n}`
      )
    } finally {
      TH.sinon.restore()
    }
  })
})
