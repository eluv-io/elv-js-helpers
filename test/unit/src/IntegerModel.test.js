// * IntegerModel(42)    //=> 42 (proxied by ObjectModel)
// *
// * IntegerModel(4.2)   //=> EXCEPTION: 'Value must be an integer (got: 4.2)'
// *
// * IntegerModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
const chai = require('chai')
chai.should()
const expect = chai.expect

const IntegerModel = require('../../../src/IntegerModel')

describe('IntegerModel', () => {

  it('should pass for integers', () => {
    IntegerModel(1).should.equal(1)
    IntegerModel(0).should.equal(0)
    IntegerModel(-0).should.equal(0)
  })

  it('should throw an exception for non-integers', () => {
    expect(() => IntegerModel(1.5)).to.throw('Value must be an integer (got: 1.5)')
    expect(() => IntegerModel(-1.5)).to.throw('Value must be an integer (got: -1.5)')
    expect(() => IntegerModel(Infinity)).to.throw('Value must be an integer (got: Infinity)')
    expect(() => IntegerModel(-Infinity)).to.throw('Value must be an integer (got: -Infinity)')
  })

  it('should throw an exception for non-numbers', () => {
    expect(() => IntegerModel()).to.throw('expecting Number, got undefined')
    expect(() => IntegerModel([])).to.throw('expecting Number, got Array []')
    expect(() => IntegerModel([1])).to.throw('expecting Number, got Array [1]')
    expect(() => IntegerModel('1')).to.throw('expecting Number, got String "1"')
    expect(() => IntegerModel(true)).to.throw('expecting Number, got Boolean true')
    expect(() => IntegerModel(null)).to.throw('expecting Number, got null')
    expect(() => IntegerModel(IntegerModel)).to.throw('expecting Number, got Function Integer')
    expect(() => IntegerModel(x => x)).to.throw('expecting Number, got Function x => x')
  })

})
