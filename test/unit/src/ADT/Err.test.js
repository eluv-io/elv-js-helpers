// unit test for Err.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const Err = require('../../../../src/ADT/Err')
const Ok = require('../../../../src/ADT/Ok')

const resultUnwrap = require('../../../../src/Conversion/resultUnwrap')

const curry = require('../../../../src/Functional/curry')
const liftA2 = require('../../../../src/Functional/liftA2')

const kind = require('../../../../src/Validation/kind')

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
    kind(resultUnwrap(errObject1)).should.equal('Array')
  })

  it('should be able to wrap an object', () => {
    const structuredErr = Err({message: 'foo', err: TypeError})
    kind(resultUnwrap(structuredErr)).should.equal('Array')
    resultUnwrap(structuredErr)[0].message.should.equal('foo')
  })

  it('should throw an exception only for empty array', () => {
    expect(()=> Err([])).to.throw('Err cannot wrap an empty array')
    expect(()=> Err([undefined])).to.not.throw
  })
})