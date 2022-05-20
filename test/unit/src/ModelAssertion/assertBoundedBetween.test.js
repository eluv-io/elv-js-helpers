// unit test for assertBoundedBetween.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const assertBoundedBetween = require('../../../../src/ModelAssertion/assertBoundedBetween')

const compare = require('../../../../src/Functional/compare')

const IntegerModel = require('../../../../src/Model/IntegerModel')

describe('assertBoundedBetween', () => {

  it('should ', () => {
    const CartonEggCountModel = IntegerModel
      .extend()
      .assert(
        ...assertBoundedBetween(
          IntegerModel,
          0,
          12,
          true,
          true,
          compare
        )
      )
      .as('CartonEggCount')

    CartonEggCountModel(0).should.equal(0)
    CartonEggCountModel(6).should.equal(6)
    CartonEggCountModel(12).should.equal(12)
    expect(() => CartonEggCountModel(42)).throw('Value must be >= 0 and <= 12 (got: 42)')
    expect(() => CartonEggCountModel('foo')).throw('expecting Number, got String "foo"')
  })
})
