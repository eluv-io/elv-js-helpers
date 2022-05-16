// unit test for Err.js

const chai = require('chai')
chai.should()

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

const resultUnwrap = require('../../../../src/Conversion/resultUnwrap')

const curry = require('../../../../src/Functional/curry')
const liftA2 = require('../../../../src/Functional/liftA2')

const kindOf = require('../../../../src/Validation/kindOf')

describe('Err', () => {

  const okObject = Ok(42)
  const errObject1 = Err('failed to obtain first input')
  const errObject2 = Err(['failed to obtain second input'])
  const mult = (a, b) => a * b
  const multResults = liftA2(curry(mult))

  it('should create an instance of ADT that works as expected with a lifted function', () => {
    multResults(errObject1, okObject).inspect().should.equal('Err [ "failed to obtain first input" ]')
    multResults(okObject, errObject2).inspect().should.equal('Err [ "failed to obtain second input" ]')
    multResults(errObject1, errObject2).inspect().should.equal('Err [ "failed to obtain first input", "failed to obtain second input" ]')
  })

  it('should automatically wrap non-array value in an array', () => {
    kindOf(resultUnwrap(errObject1)).should.equal('array')
  })
})
