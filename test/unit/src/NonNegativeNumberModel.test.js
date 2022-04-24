// noinspection JSValidateTypes

const chai = require('chai')
chai.should()
const expect = chai.expect

const NonNegativeNumberModel = require('../../../src/NonNegativeNumberModel')

describe('NonNegativeNumberModel', () => {

  it('should pass for good numbers', () => {
    NonNegativeNumberModel(1).should.equal(1)
    NonNegativeNumberModel(0).should.equal(0)
    NonNegativeNumberModel(-0).should.equal(0)
    NonNegativeNumberModel(1.5).should.equal(1.5)
    NonNegativeNumberModel(Infinity).should.equal(Infinity)
  })

  it('should throw an exception for bad numbers', () => {
    expect(() => NonNegativeNumberModel(-1)).to.throw('Value must be >= 0 (got: -1)')
    expect(() => NonNegativeNumberModel(-1.5)).to.throw('Value must be >= 0 (got: -1.5)')
    expect(() => NonNegativeNumberModel(-Infinity)).to.throw('Value must be >= 0 (got: -Infinity)')
  })


  it('should throw an exception for non-numbers', () => {
    expect(() => NonNegativeNumberModel()).to.throw('expecting Number, got undefined')
    expect(() => NonNegativeNumberModel([])).to.throw('expecting Number, got Array []')
    expect(() => NonNegativeNumberModel([1])).to.throw('expecting Number, got Array [1]')
    expect(() => NonNegativeNumberModel('1')).to.throw('expecting Number, got String "1"')
    expect(() => NonNegativeNumberModel(true)).to.throw('expecting Number, got Boolean true')
    expect(() => NonNegativeNumberModel(null)).to.throw('expecting Number, got null')
    expect(() => NonNegativeNumberModel(NonNegativeNumberModel)).to.throw('expecting Number, got Function NonNegativeNumber')
    expect(() => NonNegativeNumberModel(x => x)).to.throw('expecting Number, got Function x => x')
  })

})
