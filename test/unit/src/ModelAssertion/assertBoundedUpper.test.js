// unit test for assertBoundedUpper.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const assertBoundedUpper = require('../../../../src/ModelAssertion/assertBoundedUpper')

const compare = require('../../../../src/Functional/compare')

const IntegerModel = require('../../../../src/Model/IntegerModel')

describe('assertBoundedUpper', () => {
  it('should work as expected', () => {
    const NegativeIntegerModel = IntegerModel
      .extend()
      .assert(
        ...assertBoundedUpper(
          IntegerModel,
          0,
          false,
          compare
        )
      )
      .as('NegativeInteger')

    NegativeIntegerModel(-1).should.equal(-1)
    expect(()=>NegativeIntegerModel(0)).to.throw('Value must be < 0 (got: 0)')
    expect(()=>NegativeIntegerModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
