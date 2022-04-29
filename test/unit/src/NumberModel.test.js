const chai = require('chai')
chai.should()
const expect = chai.expect

const NumberModel = require('../../../src/NumberModel')

describe('NumberModel', () => {

  it('should pass for numbers', () => {
    NumberModel(1).should.equal(1)
    NumberModel(0).should.equal(0)
    NumberModel(-0).should.equal(0)
    NumberModel(1.5).should.equal(1.5)
    NumberModel(-1.5).should.equal(-1.5)
    NumberModel(Infinity).should.equal(Infinity)
    NumberModel(-Infinity).should.equal(-Infinity)
  })

  it('should throw an exception for non-numbers', () => {
    expect(() => NumberModel()).to.throw('expecting Number, got undefined')
    expect(() => NumberModel([])).to.throw('expecting Number, got Array []')
    expect(() => NumberModel([1])).to.throw('expecting Number, got Array [1]')
    expect(() => NumberModel('1')).to.throw('expecting Number, got String "1"')
    expect(() => NumberModel(true)).to.throw('expecting Number, got Boolean true')
    expect(() => NumberModel(null)).to.throw('expecting Number, got null')
    expect(() => NumberModel(NumberModel)).to.throw('expecting Number, got Function Number')
    expect(() => NumberModel(x => x)).to.throw('expecting Number, got Function x => x')
  })

})
