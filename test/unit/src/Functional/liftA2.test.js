// unit test for liftA2.js

const chai = require('chai')
chai.should()

const equals = require('ramda/src/equals')

const liftA2 = require('../../../../src/Functional/liftA2')

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

const resultToPOJO = require('../../../../src/Conversion/resultToPOJO')

const curry = require('../../../../src/Functional/curry')


describe('liftA2', () => {

  const mult = (a, b) => a * b
  const okObject = Ok(42)
  const errObject1 = Err('failed to obtain first input')
  const errObject2 = Err(['failed to obtain second input'])


  it('should work as expected', () => {
    mult(42, 42).should.equal(1764)
    const liftedMult = liftA2(curry(mult))
    const goodResult = liftedMult(okObject, okObject)
    equals(resultToPOJO(goodResult), {ok: true, result: 1764}).should.be.true
    liftedMult(errObject1, okObject).inspect().should.equal('Err [ "failed to obtain first input" ]')
    liftedMult(okObject, errObject2).inspect().should.equal('Err [ "failed to obtain second input" ]')
    const badResult3 = liftedMult(errObject1, errObject2)
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
    liftA2(curry(mult), okObject, okObject).inspect().should.equal('Ok 1764')
  })
})
