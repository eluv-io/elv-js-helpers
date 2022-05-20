// unit test for objBadVal.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('ramda/src/equals')

const objBadVal = require('../../../../src/Validation/objBadVal')

const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')

describe('objBadVal', () => {

  it('should work as expected', () => {
    expect(objBadVal(NonBlankStrModel, {foo: 'bar'}) === undefined).to.be.true
    equals(objBadVal(NonBlankStrModel, {foo: ' '}) ,  ['foo', ' ']).should.be.true
    equals(objBadVal(NonBlankStrModel, {foo: 42}) ,['foo', 42]).should.be.true
  })

  it('should be curried', () => {
    const findBlankVal = objBadVal(NonBlankStrModel)
    expect(findBlankVal( {foo: 'bar'}) === undefined).to.be.true
    equals(findBlankVal({foo: ' '}) ,  ['foo', ' ']).should.be.true
  })
})
