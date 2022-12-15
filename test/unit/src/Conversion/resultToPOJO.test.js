/* eslint-disable no-prototype-builtins */
const chai = require('chai')
chai.should()
const expect = chai.expect

const multiply = require('ramda/src/multiply')

const Err = require('../../../../src/ADT/Err')
const kind = require('../../../../src/Validation/kind')
const liftA2 = require('../../../../src/Functional/liftA2')
const Ok = require('../../../../src/ADT/Ok')

const resultToPOJO = require('../../../../src/Conversion/resultToPOJO')

describe('resultToPOJO', function () {
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
    () => expect(() => resultToPOJO(malformedErr)).to.throw
  )

  it('should return a value with ok: true when given an Ok', () => result.ok.should.be.true)
  it('should return a value with a "value" attribute when given an Ok',
    () => result.value.should.equal(42)
  )
  it('should not return a value with an "errors" attribute when given an Ok',
    () => result.hasOwnProperty('errors').should.be.false
  )

  it('should return a value with ok: false when given an Err', () => {
    simpleErrRetVal.ok.should.be.false
    doubleErrRetVal.ok.should.be.false
    tripleErrRetVal.ok.should.be.false
  })

  it('should return a value with an "errors" attribute that is a single element array when given an Err with a single element array', () => {
    simpleErrRetVal.errors.length.should.equal(1)
    simpleErrRetVal.errors[0].should.equal('first error')
    console.log(JSON.stringify(simpleErrRetVal.errors))
  })

  it('should return a value with an "errors" attribute that is an array when given an Err', () => {
    simpleErrRetVal.hasOwnProperty('errors').should.be.true
    doubleErrRetVal.hasOwnProperty('errors').should.be.true
    tripleErrRetVal.hasOwnProperty('errors').should.be.true

    kind(simpleErrRetVal.errors).should.equal('Array')
    kind(doubleErrRetVal.errors).should.equal('Array')
    kind(tripleErrRetVal.errors).should.equal('Array')
  })

  it('should not return a value with a "result" attribute when given an Err', () => {
    simpleErrRetVal.hasOwnProperty('result').should.be.false
    doubleErrRetVal.hasOwnProperty('result').should.be.false
    tripleErrRetVal.hasOwnProperty('result').should.be.false
  })

})
