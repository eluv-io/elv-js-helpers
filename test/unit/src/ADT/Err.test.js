const TH = require('../../../test-helpers')
const Err = TH.requireSrcFile('ADT/Err')

// AUTO-GENERATED TEST: Do not modify the following "describe('Err JSDoc example', ...)" block:
describe('Err JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Ok = TH.requireSrcFile('ADT/Ok')
    const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')
    const curry = TH.requireSrcFile('Functional/curry')
    const liftA2 = TH.requireSrcFile('Functional/liftA2')
    const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')
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
    TH.expect(console.log.calledWith('{\n  "ok": true,\n  "value": 1764\n}')).to.be.true
    TH.sinon.restore()

    multResults(errObject1, okObject).inspect().should.eql('Err [ "failed to obtain first input" ]')
    multResults(okObject, errObject2).inspect().should.eql('Err [ "failed to obtain second input" ]')
    const resultTwoBadInputs = multResults(errObject1, errObject2)
    resultTwoBadInputs.inspect().should.eql('Err [ "failed to obtain first input", "failed to obtain second input" ]')

    TH.sinon.stub(console, 'log')
    dumpJSON(resultToPOJO(resultTwoBadInputs))
    TH.expect(
      console.log.calledWith(
        '{\n  "ok": false,\n  "errors": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ],\n  "errorDetails": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ]\n}'
      )
    ).to.be.true
    TH.sinon.restore()

    TH.expect(() => Err([])).to.throw('Err cannot wrap an empty array')
    Err([undefined]).inspect().should.eql('Err [ undefined ]')

    TH.sinon.stub(console, 'log')
    dumpJSON(resultToPOJO(Err([undefined])))
    TH.expect(
      console.log.calledWith(
        '{\n  "ok": false,\n  "errors": [\n    "undefined"\n  ],\n  "errorDetails": [\n    null\n  ]\n}'
      )
    ).to.be.true
    TH.sinon.restore()
  })
})

describe('Err', () => {
  const Ok = TH.requireSrcFile('ADT/Ok')
  const resultUnwrap = TH.requireSrcFile('Conversion/resultUnwrap')
  const curry = TH.requireSrcFile('Functional/curry')
  const liftA2 = TH.requireSrcFile('Functional/liftA2')
  const kind = TH.requireSrcFile('Validation/kind')

  const okObject = Ok(42)
  const errObject1 = Err('failed to obtain first input')
  const errObject2 = Err(['failed to obtain second input'])
  const mult = (a, b) => a * b
  const multResults = liftA2(curry(mult))

  it('should create an instance of ADT that works as expected with a lifted function', () => {
    multResults(errObject1, okObject).inspect().should.equal('Err [ "failed to obtain first input" ]')
    multResults(okObject, errObject2).inspect().should.equal('Err [ "failed to obtain second input" ]')
    multResults(errObject1, errObject2)
      .inspect()
      .should.equal('Err [ "failed to obtain first input", "failed to obtain second input" ]')
  })

  it('should automatically wrap non-array value in an array', () => {
    kind(resultUnwrap(errObject1)).should.equal('Array')
  })

  it('should be able to wrap an object', () => {
    const structuredErr = Err({message: 'foo', err: TypeError})
    kind(resultUnwrap(structuredErr)).should.equal('Array')
    resultUnwrap(structuredErr)[0].message.should.equal('foo')
  })

  it('should throw an exception only for empty array', () => {
    TH.expect(() => Err([])).to.throw('Err cannot wrap an empty array')
    TH.expect(() => Err([undefined])).to.not.throw
  })
})
