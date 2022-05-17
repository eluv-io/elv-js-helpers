// unit test for liftA3.js

const chai = require('chai')
chai.should()

const equals = require('ramda/src/equals')

const liftA3 = require('../../../../src/Functional/liftA3')

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

const resultToPOJO = require('../../../../src/Conversion/resultToPOJO')

const curry = require('../../../../src/Functional/curry')

describe('liftA3', () => {

  const mult3 = (a, b, c) => a * b * c
  const okObject = Ok(42)
  const errObject1 = Err('failed to obtain first input')
  const errObject2 = Err(['failed to obtain second input'])

  it('should work as expected', () => {
    mult3(42, 42, 42).should.equal(74088)
    const liftedMult3 = liftA3(curry(mult3))
    const goodResult = liftedMult3(okObject, okObject, okObject)
    goodResult.inspect().should.equal('Ok 74088')
    equals(resultToPOJO(goodResult), {ok: true, result: 74088}).should.be.true
    liftedMult3(errObject1, okObject, okObject)   //=> Err ['failed to obtain first input']
    liftedMult3(okObject, errObject2, okObject)   //=> Err ['failed to obtain second input']
    const badResult3 = liftedMult3(errObject1, errObject2, okObject)
    badResult3.inspect().should.equal('Err [ "failed to obtain first input", "failed to obtain second input" ]')
    equals(
      resultToPOJO(badResult3),
      {
        ok: false,
        errors: ['failed to obtain first input', 'failed to obtain second input'],
        errorDetails: ['failed to obtain first input', 'failed to obtain second input']
      }
    ).should.be.true
  })

  it('should be curried', () => {
    liftA3(curry(mult3), okObject, okObject, okObject).inspect().should.equal('Ok 74088')
  })
})
