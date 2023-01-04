// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const liftA3 = TH.requireSrcFile('Functional/liftA3')

describe('liftA3 JSDoc example', () => {
  it('should execute correctly as described', () => {
    const curry = TH.requireSrcFile('Functional/curry')
    const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')
    // define a function that takes and returns 'normal' values:
    const mult3 = (a, b, c) => a * b * c
    mult3(42, 42, 42).should.eql(74088)
    // convert function 'mult3' into one that works with values wrapped in Functional data types:
    const liftedMult3 = liftA3(curry(mult3))
    // create a wrapped good input
    const okObject = Ok(42)
    // create 2 wrapped errors indicating input failures:
    // non-array input automatically converted to single element array
    const errObject1 = Err('failed to obtain first input')
    const errObject2 = Err(['failed to obtain second input'])
    const goodResult = liftedMult3(okObject, okObject, okObject)
    goodResult.inspect().should.eql('Ok 74088')
    resultToPOJO(goodResult).should.eql({ok: true, value: 74088})
    // call lifted function using 1 bad input:
    const badResult1 = liftedMult3(errObject1, okObject, okObject)
    resultToPOJO(badResult1).ok.should.eql(false)
    resultToPOJO(badResult1).errMsgs.should.eql(['failed to obtain first input'])
    const badResult2 = liftedMult3(okObject, errObject2, okObject)
    resultToPOJO(badResult2).ok.should.eql(false)
    resultToPOJO(badResult2).errMsgs.should.eql(['failed to obtain second input'])
    // call lifted function using 2 bad inputs:
    const badResult3 = liftedMult3(errObject1, errObject2, okObject)
    resultToPOJO(badResult3).ok.should.eql(false)
    resultToPOJO(badResult3).errMsgs.should.eql(['failed to obtain first input', 'failed to obtain second input'])

    TH.sinon.stub(console, 'log')
    dumpJSON(resultToPOJO(badResult3))
    try {
      TH.chai.assert.deepEqual(
        console.log.getCall(0).args[0],
        `{\n  "ok": false,\n  "errMsgs": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ],\n  "errors": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ]\n}`
      )
    } finally {
      TH.sinon.restore()
    }
    // liftA3 itself is curried, it can be called with 1-4 arguments as desired. If called with 4 arguments, it will
    // immediately return the final result instead of returning a function.
    liftA3(curry(mult3), okObject, okObject, okObject).inspect().should.eql('Ok 74088')
  })
})
