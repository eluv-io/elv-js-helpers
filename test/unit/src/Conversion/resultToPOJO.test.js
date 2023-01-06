const TH = require('../../../test-helpers')
const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')

describe('resultToPOJO', function () {

  const multiply = require('@eluvio/ramda-fork/src/multiply')

  const Err = TH.requireSrcFile('ADT/Err')
  const kind = TH.requireSrcFile('Validation/kind')
  const liftA2 = TH.requireSrcFile('Functional/liftA2')
  const Ok = TH.requireSrcFile('ADT/Ok')

  const result = resultToPOJO(Ok(42))

  const malformedErr = Err('error val not wrapped in an array')

  const err1 = Err(['first error'])
  const err2 = Err(['second error'])
  const err3 = Err(['third error'])
  const doubleErr = liftA2(multiply, err1, err2)
  const tripleErr = liftA2(multiply, doubleErr, err3)

  const simpleErrRetVal = resultToPOJO(err1)
  const doubleErrRetVal = resultToPOJO(doubleErr)
  const tripleErrRetVal = resultToPOJO(tripleErr)

  it('should throw an exception when given an Err that does not contain an array',
    () => TH.expect(() => resultToPOJO(malformedErr)).to.throw
  )

  it('should return a value with ok: true when given an Ok', () => result.ok.should.be.true)
  it('should return a value with a "value" attribute when given an Ok',
    () => result.value.should.equal(42)
  )
  it('should not return a value with an "errors" attribute when given an Ok',
    () => Object.keys(result).includes('errors').should.be.false
  )

  it('should return a value with ok: false when given an Err', () => {
    simpleErrRetVal.ok.should.be.false
    doubleErrRetVal.ok.should.be.false
    tripleErrRetVal.ok.should.be.false
  })

  it('should return a value with an "errors" attribute that is a single element array when given an Err with a single element array', () => {
    simpleErrRetVal.errors.length.should.equal(1)
    simpleErrRetVal.errors[0].should.equal('first error')
  })

  it('should return a value with an "errors" attribute that is an array when given an Err', () => {
    Object.keys(simpleErrRetVal).includes('errors').should.be.true
    Object.keys(doubleErrRetVal).includes('errors').should.be.true
    Object.keys(tripleErrRetVal).includes('errors').should.be.true

    kind(simpleErrRetVal.errors).should.equal('Array')
    kind(doubleErrRetVal.errors).should.equal('Array')
    kind(tripleErrRetVal.errors).should.equal('Array')
  })

  it('should not return a value with a "result" attribute when given an Err', () => {
    Object.keys(simpleErrRetVal).includes('result').should.be.false
    Object.keys(doubleErrRetVal).includes('result').should.be.false
    Object.keys(tripleErrRetVal).includes('result').should.be.false
  })

})
