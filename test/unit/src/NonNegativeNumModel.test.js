// noinspection JSValidateTypes

const chai = require('chai')
chai.should()
const expect = chai.expect

const NonNegativeNumModel = require('../../../src/NonNegativeNumModel')

describe('NonNegativeNumModel', () => {

  it('should pass for good numbers', () => {
    NonNegativeNumModel(1).should.equal(1)
    NonNegativeNumModel(0).should.equal(0)
    NonNegativeNumModel(-0).should.equal(0)
    NonNegativeNumModel(1.5).should.equal(1.5)
    NonNegativeNumModel(Infinity).should.equal(Infinity)
  })

  it('should throw an exception for bad numbers', () => {
    expect(() => NonNegativeNumModel(-1)).to.throw('Value must be >= 0 (got: -1)')
    expect(() => NonNegativeNumModel(-1.5)).to.throw('Value must be >= 0 (got: -1.5)')
    expect(() => NonNegativeNumModel(-Infinity)).to.throw('Value must be >= 0 (got: -Infinity)')
  })


  it('should throw an exception for non-numbers', () => {
    expect(() => NonNegativeNumModel()).to.throw('expecting Number, got undefined')
    expect(() => NonNegativeNumModel([])).to.throw('expecting Number, got Array []')
    expect(() => NonNegativeNumModel([1])).to.throw('expecting Number, got Array [1]')
    expect(() => NonNegativeNumModel('1')).to.throw('expecting Number, got String "1"')
    expect(() => NonNegativeNumModel(true)).to.throw('expecting Number, got Boolean true')
    expect(() => NonNegativeNumModel(null)).to.throw('expecting Number, got null')
    expect(() => NonNegativeNumModel(NonNegativeNumModel)).to.throw('expecting Number, got Function NonNegativeNumber')
    expect(() => NonNegativeNumModel(x => x)).to.throw('expecting Number, got Function x => x')
  })

})
