// noinspection JSValidateTypes

const chai = require('chai')
chai.should()
const expect = chai.expect

const NonNegativeIntModel = require('../../../src/NonNegativeIntModel')

describe('NonNegativeNumberModel', () => {

  it('should pass for good numbers', () => {
    NonNegativeIntModel(1).should.equal(1)
    NonNegativeIntModel(0).should.equal(0)
    NonNegativeIntModel(-0).should.equal(0)
  })

  it('should throw an exception for bad numbers', () => {
    expect(() => NonNegativeIntModel(-1)).to.throw('Value must be >= 0 (got: -1)')
    expect(() => NonNegativeIntModel(-1.5)).to.throw('Value must be an integer (got: -1.5)')
    expect(() => NonNegativeIntModel(-Infinity)).to.throw('Value must be an integer (got: -Infinity)')
    expect(() => NonNegativeIntModel(1.5)).to.throw('Value must be an integer (got: 1.5)')
    expect(() => NonNegativeIntModel(Infinity)).to.throw('Value must be an integer (got: Infinity)')
  })


  it('should throw an exception for non-numbers', () => {
    expect(() => NonNegativeIntModel()).to.throw('expecting Number, got undefined')
    expect(() => NonNegativeIntModel([])).to.throw('expecting Number, got Array []')
    expect(() => NonNegativeIntModel([1])).to.throw('expecting Number, got Array [1]')
    expect(() => NonNegativeIntModel('1')).to.throw('expecting Number, got String "1"')
    expect(() => NonNegativeIntModel(true)).to.throw('expecting Number, got Boolean true')
    expect(() => NonNegativeIntModel(null)).to.throw('expecting Number, got null')
    expect(() => NonNegativeIntModel(NonNegativeIntModel)).to.throw('expecting Number, got Function NonNegativeInteger')
    expect(() => NonNegativeIntModel(x => x)).to.throw('expecting Number, got Function x => x')
  })

})
