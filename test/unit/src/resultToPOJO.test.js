/* eslint-disable no-prototype-builtins */
const chai = require('chai')
chai.should()
const expect = chai.expect

const liftA2 = require('crocks/helpers/liftA2')
const {Ok, Err} = require('crocks/Result')

const kindOf = require('kind-of')
const {multiply} = require('ramda')

const resultToPOJO = require('../../../src/resultToPOJO')

describe('resultToPOJO', function () {
  const okRetVal = resultToPOJO(Ok(42))

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

  it('should return a value with ok: true when given an Ok', () => okRetVal.ok.should.be.true)
  it('should return a value with a "result" attribute when given an Ok',
    () => okRetVal.result.should.equal(42)
  )
  it('should not return a value with an "errors" attribute when given an Ok',
    () => okRetVal.hasOwnProperty('errors').should.be.false
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

    kindOf(simpleErrRetVal.errors).should.equal('array')
    kindOf(doubleErrRetVal.errors).should.equal('array')
    kindOf(tripleErrRetVal.errors).should.equal('array')
  })

  it('should not return a value with a "result" attribute when given an Err', () => {
    simpleErrRetVal.hasOwnProperty('result').should.be.false
    doubleErrRetVal.hasOwnProperty('result').should.be.false
    tripleErrRetVal.hasOwnProperty('result').should.be.false
  })

})
