// unit test for objBadVal.js

const chai = require('chai')
chai.should()
const expect = chai.expect


const objBadVal = require('../../../../src/Validation/objBadVal')

const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')

describe('objBadVal', () => {

  it('should work as expected', () => {
    expect(objBadVal(NonBlankStrModel, {foo: 'bar'}) === undefined).to.be.true
    objBadVal(NonBlankStrModel, {foo: ' '}).should.eql(['foo', ' '])
    objBadVal(NonBlankStrModel, {foo: 42}).should.eql(['foo', 42])
  })

  it('should be curried', () => {
    const findBlankVal = objBadVal(NonBlankStrModel)
    expect(findBlankVal({foo: 'bar'}) === undefined).to.be.true
    findBlankVal({foo: ' '}).should.eql( ['foo', ' '])
  })
})
